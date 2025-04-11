
 
/*
export const fetchData=async(url,methodtype)=>{

  const options = {
      method: methodtype,
      headers: {
          'x-rapidapi-key': '120e8596edmshe6d0e27c29f2974p1a33fdjsn33700bfa36c2',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
  }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }

}
*/

export const exerciseOptions = {
  method: 'GET',
  headers: {
		'x-rapidapi-key': '6e78cbfc28msh1ffd88af352e8c1p10be17jsn992f02db30e3',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'c5342f3fd5msh983f8a9fdb6d0dbp1e5395jsn1ffd5b0160a3',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
  
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  };
