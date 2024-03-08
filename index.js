const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('XhRJ6i4xs8', uuidlib.v4());
	}

module.exports = generateId
