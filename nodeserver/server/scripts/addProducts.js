const fs = require('fs');
const axios = require('axios');

const filePath = __dirname + '/updated_products.json';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    /*
        If you run the bulk insert again with the same _id, the behavior depends on the operation:

        If using { "index": { ... } }, it replaces the document (overwrites it).

        If using { "create": { ... } }, it will fail if the ID already exists.

        If using { "update": { ... } }, it will update only the specified fields.

    */

    try {
        const products = JSON.parse(data);
        
        let bulkPayload = '';

        products.forEach(product => {
            const {_id, __v, ...removeIdField} = product;

            product = {_mongooseid: _id, ...removeIdField}
            bulkPayload += JSON.stringify({ index: { _id: product._mongooseid } }) + '\n';
            bulkPayload += JSON.stringify(product) + '\n';
        });

        axios.post('hhttp://shopping_assistant-elasticsearch-1:9200/products/_bulk?refresh', bulkPayload, {
            headers: { 'Content-Type': 'application/x-ndjson' }
        })
        .then(response => {
            console.log('Bulk insert response:', response.data);
            response.data.items.forEach((item, idx) => {
                console.log(item)
            });
        })
        .catch(error => {
            console.error('Error in bulk insert:', error.response ? error.response.data : error.message);
        });

    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});
