let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement(`<input
  placeholder="Land Price"
  className="mt-2 border rounded p-4"
  onChange={(e) =>
    updateFormInput({ ...formInput, price: e.target.value })
  }
/>`);
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});