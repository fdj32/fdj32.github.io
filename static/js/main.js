function randomRGBValue() {
    return Math.floor(Math.random() * 64) + 192;
}
function randomColor() {
    return "rgb(" + randomRGBValue() + "," + randomRGBValue() + "," + randomRGBValue() + ")";
}
function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
var blog_contents = [
    {
        category: 'Java',
        contents: [
            {
                title: '垃圾回收',
                link: 'blog/2021-05-24.gc-index.md'
            },
            {
                title: 'JVM Guide',
                link: 'blog/2021-05-24.jvm-guide-index.md'
            },
            {
                title: 'j.u.c.l.AbstractQueuedSynchronizer',
                link: 'java/util/concurrent/locks/AbstractQueuedSynchronizer.java'
            }
        ]
    },
    {
        category: 'Blog',
        contents: [
            {
                title: 'Line separator in awk/sed',
                link: 'blog/2021-04-07.line.separator.awk.sed.md'
            }
        ]
    },
    {
        category: 'Apache',
        contents: [
            {
                title: 'Kafka',
                link: 'blog/2021-04-22.kafka.md'
            },
        ]
    },
    {
        category: 'MySQL',
        contents: [
            {
                title: 'Replication',
                link: 'blog/2021-05-18.mysql-17-replication.md'
            },
        ]
    },
];
// animate__* see https://animate.style/
var animate_styles = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat',
'backInDown', 'backInLeft', 'backInRight', 'backInUp',
'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp',
'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRight',
'flip', 'flipInX', 'flipInY',
'lightSpeedInRight', 'lightSpeedInLeft',
'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
'jackInTheBox', 'rollIn',
'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'];
