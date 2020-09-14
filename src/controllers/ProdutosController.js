const axios = require('axios');

async function listAll( req, res ){ 
    const headers = {
            'Authorization-Token': "8abb3a4021525ec6642f8ad1256cc27892038ff1172b024003fa4a96b1332604e4be5d43c0533a582ac02ba255153ef049ae8433e93036d842244f836b19339afcef5bbbc8ab936b2d36bd22541fdb87c99bfb8b9f82b9e34506455b0b8a72cd8d3bef38d574b1525ceaeb57dc5f1e39e3a31a3ac501b2b80b2a5d6d0778d6e1",
            User: "financeiro@mkdistribuidora.com",
            App: "Pedidos",
    }
    const response = await axios.get('http://api.sigecloud.com.br/request/Produtos/GetAll', {
        headers: headers,
    });

    return res.json({produtos: response.data})

}

async function search( req, res ){ 

    const { product } = req.query;

    const headers = {
            'Authorization-Token': "8abb3a4021525ec6642f8ad1256cc27892038ff1172b024003fa4a96b1332604e4be5d43c0533a582ac02ba255153ef049ae8433e93036d842244f836b19339afcef5bbbc8ab936b2d36bd22541fdb87c99bfb8b9f82b9e34506455b0b8a72cd8d3bef38d574b1525ceaeb57dc5f1e39e3a31a3ac501b2b80b2a5d6d0778d6e1",
            User: "financeiro@mkdistribuidora.com",
            App: "Pedidos",
    }
    const response = await axios.get(`http://api.sigecloud.com.br/request/Produtos/Pesquisar?nome=${product}`, {
        headers: headers,
    });

    return res.json({produtos: response.data})

}

module.exports = { listAll, search }
