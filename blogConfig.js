/**
 * This files contains all the meta data of your blog. Feel
 * free to change it according to your needs. Please
 * keep in mind, that the actual blog posts are fetched
 * from the Caasy API. This file only contains static
 * information that does not change such as the name
 * of the blog.
 */
export default {
    caasySDKConfig: {
        siteId: '6060b4772a9e8d6d68e8a3cd'
    },
    blogName: 'DramaHub.tk',
    defaultTitle: 'không để bạn trở nên tối cổ',
    description: 'Dramahub.tk - Chúng tôi cập nhật thường xuyên các tin tức, các chủ đề hot trên mạng xã hội, tổng hợp chúng lại và đưa đến tận điện thoại của bạn',
    // The default language is used to improve accessibility.
    // It is set on the HTML element. You can change this
    // to the main language of your content.
    defaultLanguage: 'en',
    // The locale is used for multi language content. This
    // feature hasn't been released yet. Please don't change
    // this until Caasy fully supports multi language content.
    locale: 'en_US',
    social: {
        github: 'https://github.com/DinhTruong98',
        youtube: 'https://www.youtube.com/channel/UCxM_rHZfgdN83hCtddcV_yQ',
        facebook: 'https://www.facebook.com/dinh.truong98',
    },
    footer: {
        links: [
            {
                title: 'Facebook Fanpage',
                items: [
                    { label: 'Drama Hub', url: 'https://www.facebook.com/drama.express.official' }
                ]
            },
            
            {
                title: 'Về chúng tôi',
                items: [
                    { label: 'Liên hệ quảng cáo', url: '#' },
                    { label: 'Tuyển dụng', url: '#' }
                ]
            }
        ]
    }
}