chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    if (data && data.action == "getLinks") {
        // 获取所有<a>标签
        var linkElements = document.getElementsByTagName('a');

        // 保存匹配的链接
        var magnetLinks = [];

        // 遍历<a>标签
        for (var i = 0; i < linkElements.length; i++) {
            var href = linkElements[i].getAttribute('href');

            // 检查链接是否以'magnet:'为前缀
            if (href && href.startsWith('magnet:')) {
                magnetLinks.push(href);
            }
        }
        
        sendResponse({
            received: true,
            result: magnetLinks
        }) 

    }
});