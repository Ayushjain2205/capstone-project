/* test/sample-test.js */
describe("Land registry", function() {
    it("Should register and tokenize land  sales", async function() {
      /* deploy the marketplace */
      const LandRegistry = await ethers.getContractFactory("NFTMarketplace")
      const landregistry = await LandRegistry.deploy()
      await landregistry.deployed()
  
      let listingPrice = await nftMarketplace.getListingPrice()
      listingPrice = listingPrice.toString()
  
      const auctionPrice = ethers.utils.parseUnits('1', 'ether')
  
      /* create two tokens */
      await landregistry.createToken("Land 1", auctionPrice, { value: listingPrice })
      await landregistry.createToken("Land 2", auctionPrice, { value: listingPrice })
        
      const [_, buyerAddress] = await ethers.getSigners()
    
      /* execute sale of token to another user */
      await landregistry.connect(buyerAddress).createMarketSale(1, { value: auctionPrice })
  
      /* resell a token */
      await landregistry.connect(buyerAddress).resellToken(1, auctionPrice, { value: listingPrice })
  
      /* query for and return the unsold items */
      items = await landregistry.fetchMarketItems()
      items = await Promise.all(items.map(async i => {
        const tokenUri = await landregistry.tokenURI(i.tokenId)
        let item = {
          price: i.price.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri
        }
        return item
      }))
      console.log('items: ', items)
    })
  })