const axios = require("axios");

const elasticUrl = "http://localhost:9200"; // change to your cluster URL
const indexName = "my_index";
const docId = "1"; // the _id of the document you want to update

async function updateDocument() {
  try {
    const response = await axios.post(
      `${elasticUrl}/${indexName}/_update/${docId}`,
      {
        doc: {
          // fields you want to update
          status: "active",
          updated_at: new Date().toISOString()
        }
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    console.log("Update response:", response.data);
  } catch (err) {
    console.error("Error updating document:", err.response?.data || err.message);
  }
}

updateDocument();
