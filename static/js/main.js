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
                title: 'j.u.c.l.AbstractQueuedSynchronizer',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/java/util/concurrent/locks/AbstractQueuedSynchronizer.java'
            }
        ]
    },
    {
        category: 'Blog',
        contents: [
            {
                title: 'Line separator in awk/sed',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-07.line.separator.awk.sed.md'
            }
        ]
    },
    {
        category: 'Garbage Collection',
        contents: [
            {
                title: '垃圾回收优化简介',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-09.gc-01-introduction-garbage-collection-tuning.md'
            },
            {
                title: '人机工程',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-11.gc-02-ergonomics.md'
            },
            {
                title: '垃圾收集器实现',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-12.gc-03-garbage-collector-implementation.md'
            },
            {
                title: '影响垃圾收集性能的因素',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-13.gc-04-factors-affecting-garbage-collection-performance.md'
            },
            {
                title: '可用的收集器',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-13.gc-05-available-collectors.md'
            },
            {
                title: '并行收集器',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-13.gc-06-parallel-collector.md'
            },
            {
                title: '垃圾优先垃圾收集器',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-16.gc-07-garbage-first-g1-garbage-collector.md'
            },
            {
                title: '垃圾优先垃圾收集器调优',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-19.gc-08-garbage-first-garbage-collector-tuning.md'
            },
            {
                title: 'Z 垃圾收集器',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-20.gc-09-z-garbage-collector.md'
            },
            {
                title: '其他考虑',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-20.gc-10-other-considerations.md'
            }
        ]
    },
    {
        category: 'JVM Guide',
        contents: [
            {
                title: 'JVM技术概述',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-08.java-virtual-machine-technology-overview.md'
            },
            {
                title: '编译器控制',
                link: 'https://github.com/fdj32/fdj32.github.io/blob/master/blog/2021-04-08.jvm-guide-02-compiler-control.md'
            }
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
