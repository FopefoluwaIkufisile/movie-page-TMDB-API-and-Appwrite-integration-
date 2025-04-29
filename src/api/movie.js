const api_url = import.meta.env.VITE_API_BASE_URL;
const search_url = import.meta.env.VITE_API_SEARCH_URL

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDExYTUzZGUzM2YyZDE4OGEzMTcxOTVmNDdmMjg4YiIsIm5iZiI6MTczNDE2OTc1My42MDYwMDAyLCJzdWIiOiI2NzVkNTQ5OWYxYmY5NmRjMjQ3ODA3ZjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QlHBZhxR0dWv4TEOFcD42mexjaKsh23ZyJsW-wuNUd4'
    }
  };
  

export const getMovies = async (query) => {
    const url = query ? search_url + encodeURIComponent(query) : api_url;
    try{
        const response = await fetch(url, options)
        const data = await response.json()
        // throw new Error("nawa o")
        return data;
    }
    catch(err){
        console.log(err)
    }
}

