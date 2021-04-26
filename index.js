
const { zip } = require('zip-a-folder');

const folderCompress = async ( folderPath, zipPath ) => {

    await zip(folderPath, zipPath );

};


const folderPath = './files/';
const zipPath = './folder-compress.zip';

folderCompress( folderPath, zipPath );