<div class="col s6 m4">
  <div class="card">
    <div class="card-image">
      <img src="https://fthmb.tqn.com/wpny0hfXAARYzNpvAgVuMhvITtM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beef-and-vegetable-stir-fry-165955462-58854ce95f9b58bdb39e9209.jpg">
      <span class="card-title"><%- entry.name %></span>
    </div>
    <div class="card-content">
      <p><%- entry.description %></p>
    </div>
    <div class="card-action">
      <a href="/restaurants/<%= entry.id %>">View Restaurant</a>
      <% if (entry.user && locals.currentUser && entry.user.toString() === locals.currentUser.id) { %>
          <form action="/restaurants/<%= entry.id %>/edit" method="get">
            <button>Edit</button>
          </form>
          <form action="/restaurants/<%= entry.id %>" method="post">
            <input type="hidden" name="_method" value="delete">
            <button>Delete</button>
          </form>
      <% } %>
    </div>
  </div>
</div>

<div class="input-field col s6 m3">
  <select name="rating" id="rating_field" value="<%= entry.rating %>">
    <option disabled selected value="<%= entry.rating %>"><% for (let i = 0; i < entry.rating; i++) {%>⭐<%} %></option>
    <option value="1">⭐</option>
    <option value="2">⭐⭐</option>
    <option value="3">⭐⭐⭐</option>
    <option value="4">⭐⭐⭐⭐</option>
    <option value="5">⭐⭐⭐⭐⭐</option>
  </select>
  <label>Rating:</label>
</div>
