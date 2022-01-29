

//Return url of uploaded file
export const fileUpload = async (file = {}) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/aldonavarrete/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'react-journal');
    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }

    } catch (error) {
        throw error;
    }

};
