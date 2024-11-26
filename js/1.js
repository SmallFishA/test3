// 控制我要发贴
var showButton =document.getElementById('showButton')
var box = document.getElementById('box');

showButton.addEventListener('click',function(){
    if(box.style.display === 'none' || box.style.display === ''){
        box.style.display = 'block';
    }else
    box.style.display= 'none';
});

var ShowButton =document.getElementById('ShowButton')
var Box = document.getElementById('Box');
ShowButton.addEventListener('click',function(){
    if(Box.style.display === 'none' || Box.style.display === ''){
        Box.style.display = 'block';
    }
    });


const avatars = [
    'https://ts1.cn.mm.bing.net/th?id=OIP-C.r_fZD9KWV_qxaw0dx23EKgAAAA&w=177&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
];

// 随机获取头像URL
function getRandomAvatar() {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randomIndex];
}

// 发布新帖子的函数
function postNewPost() {
    // 获取表单数据
    const title = document.getElementById('title').value;
    const section = document.getElementById('section').value;
    const content = document.getElementById('content').value;

    // 随机获取头像
    const avatarUrl = getRandomAvatar();

    // 获取当前时间
    const currentTime = new Date().toLocaleString();

    // 创建帖子元素
    const postItem = document.createElement('li');
    postItem.className = 'post-item';

    // 创建头像元素
    const avatarElement = document.createElement('img');
    avatarElement.src = avatarUrl;
    avatarElement.className = 'avatar';
    avatarElement.alt = '用户头像';

    // 创建标题元素
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;

    // 创建版块元素
    const sectionElement = document.createElement('p');
    sectionElement.textContent = `版块: ${section}`;

    // 创建时间元素
    const timeElement = document.createElement('p');
    timeElement.textContent = `发布时间: ${currentTime}`;

    // 创建内容元素
    const contentElement = document.createElement('div');
    contentElement.textContent = content;

    // 将所有元素添加到帖子项中
    postItem.appendChild(avatarElement);
    postItem.appendChild(titleElement);
    postItem.appendChild(sectionElement);
    postItem.appendChild(timeElement);
    postItem.appendChild(contentElement);

    // 将帖子项插入到帖子列表的开头
    const postList = document.getElementById('postList');
    postList.insertBefore(postItem, postList.firstChild);

    // 清空输入框
    document.getElementById('title').value = '';
    document.getElementById('section').value = '科技'; // 重置为默认选项
    document.getElementById('content').value = '';

    // 隐藏发新贴界面（可选，根据需求决定是否隐藏）
    // document.getElementById('postForm').style.display = 'none';
}