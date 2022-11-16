const allAdidas = [
    {
        id: 1,
        title: 'NMD_R1 V2 Shoes',
        src: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/9e888e9b924a4da08e70ad6b008b143d_9366/NMD_R1_V2_Shoes_White_GX6368_01_standard.jpg',
        price: 1500,
        count: 1,
        isInterest: false,
        description: 'Mens Originals',
        content: 'This shoe upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.',
        category: 'Men',
    },
    {
        id: 2,
        title: 'Forum Low Shoes',
        src: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/be17b56448da49e1afd1ae31001f387e_9366/Forum_Low_Shoes_White_GY9525_01_standard.jpg',
        price: 2000,
        count: 1,
        isInterest: false,
        description: 'Womens Originals',
        content: 'Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.',
        category: 'Women',
    },
    {
        id: 3,
        title: 'NMD_R1 V2 Shoes',
        src: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3eb37661b44b414ab00fae6f012837d7_9366/NMD_R1_Shoes_Grey_GW9462_01_standard.jpg',
        price: 1500,
        count: 1,
        isInterest: false,
        description: 'Women Originals',
        content: 'This shoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.',
        category: 'Women',
    },
    {
        id: 4,
        title: 'Forum Bonega Shoes',
        src: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00ab66c9177a43cba35aaeaa0001c726_9366/Forum_Bonega_Shoes_White_GX4414_01_standard.jpg',
        price: 1200,
        count: 1,
        isInterest: false,
        description: 'Womens Originals',
        content: 'Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.',
        category: 'Women',
    },
    {
        id: 5,
        title: 'Swift Running Shoes',
        src: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d503e6f15e4e40b6841aaa43008af614_9366/Swift_Run_Shoes_White_EE7022_01_standard.jpg',
        price: 700,
        count: 1,
        isInterest: false,
        description: 'Womens Originals',
        content: 'Clean, sleek, and modern, these juniors shoes are designed for everyday wear. The soft two-tone knit upper feels like a sock on your foot. The tongue is open on one side for easy step-in. Everything rides on a cushiony EVA midsole.',
        category: 'Women',
    },
    {
        id: 6,
        title: 'Retropy Shoes',
        src: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/38cbf243e47c4b4e9b9fae2a00e403dd_9366/Retropy_E5_Shoes_White_GW6776_01_standard.jpg',
        price: 1300,
        count: 1,
        isInterest: false,
        description: 'Men Originals',
        content: 'Made in part with recycled content generated from production waste, e.g. cutting scraps, and post-consumer household waste to avoid the larger environmental impact of producing virgin content.',
        category: 'Men',
    },
    {
        id: 7,
        title: 'Superstar Shoes',
        src: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a4b857b6d834a538609aafc0157bdab_9366/Superstar_Shoes_White_FU7712_01_standard.jpg',
        price: 750,
        count: 1,
        isInterest: false,
        description: 'Youth Originals',
        content: ' These junior shoes celebrate 50 years of the adidas Superstar. From the classic shell toe to the serrated 3-Stripes, this anniversary edition honors an unmistakable adidas design. Built on a comfortable rubber cupsole, they look fresh and fun no matter the color.',
        category: 'Men',
    },
    {
        id: 8,
        title: ' Stan-Smith Shoes',
        src: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto,t_ivy/71574d5967934d1aad06aec50020ae33_faec/Stan_Smith_Shoes_Beige_HR0180_HM16.jpg',
        price: 1100,
        count: 1,
        isInterest: false,
        description: 'Youth Originals',
        content: 'The adidas x IVY PARK Stan Smith shoes spice up the iconic silhouette through materials and texture. Each pair outsole is hand-dipped in a wash of vibrant solar yellow, adding a bold pop of color and making a strong visual statement. The canvas upper has a premium suede heel patch finished with a tonal, embossed logo.',
        category: 'Men',
    },
    {
        id: 9,
        title: 'NMD_R1 Strap Shoes',
        src: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/de2b6df507d44e6f8793ae320126bac9_9366/NMD_R1_Strap_Shoes_Pink_GW9469_01_standard.jpg',
        price: 1500,
        count: 1,
        isInterest: false,
        description: 'Women Originals',
        content: 'In a constantly changing world, be part of the change for good. Join our mission to help end plastic waste by slipping on these adidas NMD_R1 Strap shoes. As expected for an NMD, the signature elements are there. You have the sock-like knit upper, the plush BOOST midsole and, of course, the iconic heel plugs. One big difference? The strap, which replaces the laces to create a streamlined, modern look.',
        category: 'Women',
    },
    {
        id: 10,
        title: 'Busenitz_Vintage Shoes',
        src: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6234ad3e59f442618feaae27003c8ca3_9366/Busenitz_Vintage_Shoes_Black_GY6905_01_standard.jpg',
        price: 900,
        count: 1,
        isInterest: false,
        description: ' Originals',
        content: 'Approach is everything. The Busenitz Vintage reimagines all the craft and detail Dennis Busenitz demands in a shoe, with a minimalist aesthetic designed for performance. The refined result proves that less is more by leveraging fewer panels, a lower profile and a single-piece shortened tongue, with the locked-in fit and cupsole control of the Busenitz franchise in premium suede.',
        category: 'Men',
    },
    
]

export default allAdidas