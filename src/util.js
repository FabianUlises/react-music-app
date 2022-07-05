import { v4 as uuid } from 'uuid'

function chillHop() {
    return [
        {
            name: 'Full Circle',
            cover:
                "https://chillhop.com/wp-content/uploads/2022/05/3aaa079444cf9c1d4e0a1f53947321b29ff554c0-150x150.jpg",
            artist: 'MOODS',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=35507',
            color: ['#2eb35e', '#5c7a66'],
            id: uuid(),
            active: true
        },
        {
            name: 'Full Circle',
            cover:
                "https://chillhop.com/wp-content/uploads/2022/05/3aaa079444cf9c1d4e0a1f53947321b29ff554c0-150x150.jpg",
            artist: 'MOODS',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=35507',
            color: ['#2eb35e', '#5c7a66'],
            id: uuid(),
            active: true
        }
    ]
}
export default chillHop;