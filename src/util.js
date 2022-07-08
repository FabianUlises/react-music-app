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
            active: false
        },
        {
            name: 'Sundials',
            cover:
                "https://i.scdn.co/image/ab67616d0000b273cc91dc809c14444da790c0c0",
            artist: 'cheif Shrimpnose',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=41687',
            color: ['#2eb35e', '#5c7a66'],
            id: uuid(),
            active: true
        },
        {
            name: 'A Remember',
            cover:
                "https://i.scdn.co/image/ab67616d0000b27326b04e87d8297b1b507c2cd8",
            artist: 'Sleepy Fish',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=36925',
            color: ['#2eb35e', '#5c7a66'],
            id: uuid(),
            active: false
        },
        {
            name: 'Growing Through',
            cover:
                "https://i.scdn.co/image/ab67616d0000b273cf6542bf8361937ca6e24800",
            artist: 'Philanthrope, mommy',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=35636',
            color: ['#2eb35e', '#5c7a66'],
            id: uuid(),
            active: false
        }
    ]
}
export default chillHop;