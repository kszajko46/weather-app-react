export default function Search() {
  return (
    <div>
      <form id="search-form" class="mb-4">
        <div class="row">
          <div class="col-8">
            <input
              type="search"
              placeholder="Enter a City"
              class="form-control"
              id="city-search"
              autocomplete="off"
            />
          </div>
          <div class="col-2">
            <input type="submit" value="search" class="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}
