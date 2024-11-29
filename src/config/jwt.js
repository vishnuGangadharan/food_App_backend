import jwt from 'jsonwebtoken'

export const generateToken = (userId, role) => {
    const secretKey = "dsjfklasdjflkf"
    console.log('secret',secretKey);
    console.log('tt', process.env.JWT_SECRET_KEY);
    
    if(secretKey){
        const token = jwt.sign({ userId, role }, secretKey, { expiresIn: '7d' })
        return token
    }
    throw new Error("JWT_SECRET_KEY not found")
}



