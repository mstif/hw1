const apiRequest = async () => {
  const response = await fetch("/fact", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
	}).then((response) => response.json());
	console.log(response);
	return response.fact;
};

export default apiRequest;
