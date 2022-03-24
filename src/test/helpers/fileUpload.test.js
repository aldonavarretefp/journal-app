import { fileUpload } from '../../helpers/fileUpload';
describe('Pruebas en fileUpload',()=>{
    test('debe de cargar un archivo y retornar la URL ', async () => {
        const img = await fetch('https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
        const blob = await img.blob();
        const file = new File([blob], 'foto.jpg', { type: 'image/jpg' });
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');
    })
    
    test('debe de retornar un error', async () => {

        const file = new File([], 'foto.jpg', { type: 'image/jpg' });
        const url = await fileUpload(file);

        expect(url).toBe(null);
    })
    
});