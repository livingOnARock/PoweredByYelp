const apiKey =
  "VhiuuvdlUkySXYfJSB-n9tvUyI_gQSlwUP5TGAZDnFJjpyGaG2n0MveEPmderqNAmfsm_GpAUuWtWyW80Cqlm5G5trvxhT2qtmJLNtVvy0DzMKMoOjbv22S-RrTZXHYx";
//const ClientID = "TVTXbVMnZ82oQTlwYqxu1g";

let Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          console.log(jsonResponse.businesses);
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              phone: business.phone,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              url: business.url
            };
          });
        }
      });
  }
};

export default Yelp;
