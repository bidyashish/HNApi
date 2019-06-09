async function tj_customer_name() {
    const response = await fetch(getMaxUrl);
    const json = await response.json();

    return json;
}

async function something() {
    const fullName = await tj_customer_name();
    console.log(fullName);
}
something();





const getMaxitem = async url => {

	try {
	  const response = await fetch(getMaxUrl);
	  const getMaxItemData = await response.json();
	  console.log(getMaxItemData);
	  //return getMaxItemData
	} catch (error) {
	  console.log(error);
	}
  };
  
getMaxitem()
console.log(getMaxItemData)