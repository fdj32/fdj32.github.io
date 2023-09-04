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
                title: 'Garbage Collection',
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
            },
            {
                title: 'go-admin Release',
                link: 'blog/2023-03-31.go-admin.release.md'
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
            {
                title: 'MySQL Shell',
                link: 'blog/2021-06-04.mysql-shell.md'
            },
            {
                title: 'Troubleshooting Innodb Cluster',
                link: 'blog/2021-06-09.troubleshooting-innodb-cluster.md'
            },
        ]
    },
    {
        category: '资治通鉴',
        contents: [
            {
                title: '周',
                link: 'txt/01.zhou.txt'
            },
            {
                title: '秦',
                link: 'txt/02.qin.txt'
            },
            {
                title: '汉',
                link: 'txt/03.han.txt'
            },
            {
                title: '魏',
                link: 'txt/04.wei.txt'
            },
            {
                title: '晋',
                link: 'txt/05.jin.txt'
            },
            {
                title: '南北朝-宋',
                link: 'txt/06.nanbeichao.song.txt'
            },
            {
                title: '南北朝-齐',
                link: 'txt/07.nanbeichao.qi.txt'
            },
            {
                title: '梁',
                link: 'txt/08.nanbeichao.liang.txt'
            },
            {
                title: '陈',
                link: 'txt/09.nanbeichao.chen.txt'
            },
            {
                title: '隋',
                link: 'txt/10.sui.txt'
            },
            {
                title: '唐',
                link: 'txt/11.tang.txt'
            },
            {
                title: '五代-后梁',
                link: 'txt/12.hou.liang.txt'
            },
            {
                title: '五代-后唐',
                link: 'txt/13.hou.tang.txt'
            },
            {
                title: '五代-后晋',
                link: 'txt/14.hou.jin.txt'
            },
            {
                title: '五代-后汉',
                link: 'txt/15.hou.han.txt'
            },
            {
                title: '五代-后周',
                link: 'txt/16.hou.zhou.txt'
            },
            {
                title: '进书表',
                link: 'txt/17.jinshubiao.txt'
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
