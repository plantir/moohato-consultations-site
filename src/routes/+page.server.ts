export function load({ params }) {
    let hair_packages = [
        {
            title: "پکیج ریزش موی ارثی آقایان",
            price: "2,440,000",
            features: [
                'قارچ ریشی',
                'تونیک روغن 12 گیاه',
                'لوسیون ضد ریزش گیاهی تخصصی ',
                'لوسیون رویش مجدد گیاهی تخصصی',
                'شامپو کافيین ',
                'شامپو مورینگا ',
                'سرم بلک سید وارداتی',
                'سبوس برنج قهوه ای ارگانیک ',
                'قیمت پکیج 4 ماهه : 4,880,000',
                'قیمت پکیج 2 ماهه : 2,440,000'
            ],
            description: "ویژگی : قطع ریزش موی ارثی اقایان . درمان ریزش موی ارثی آقایان . رویش مجدد موها . افژایش ضخامت مو ها . پرپشت شدن موها. .دوره ی درمان 4 ماه"
        },
        {
            title: "پکیج ریزش موی خانم ها",
            price: "1,940,000",
            features: [
                'تونیک روغن 12 گیاه',
                'لوسیون ضد ریزش گیاهی تخصصی ',
                'لوسیون رویش مجدد گیاهی تخصصی',
                'شامپو کافيین ',
                'شامپو مورینگا ',
                'سرم سیر سیاه وارداتی',
                'سبوس برنج قهوه ای ارگانیک',
                'قیمت پکیج 4 ماهه : 3.880.000',
                'قیمت پکیج 2 ماهه : 1.940.000'
            ],
            description: "ویژگی : قطع ریزش موی ارثی خانم ها . درمان ریزش موی ارثی خانم ها . رویش مجدد موها . افژایش ضخامت مو ها . پرپشت شدن موها .دوره ی درمان 4 ماه"
        },
        {
            title: "پکیج ریز موی اقتصادی ",
            price: "890,000",
            features: [
                'سرم کافیین آلمانی وارداتی  ',
                'شامپو کافیین ',
            ],
            description: "وبژگی : قطع کامل ریزش مو . رویش مجدد . افزایش ضخامت موها "
        },
    ]
    let sexual_packages = [
        {
            title: "پکیج زودانزالی و عدم نعوظ",
            price: "2,480,000",
            features: [],
            description: ""
        },
        {
            title: "پکیج درمان زودانزالی",
            price: "1,880,000",
            features: [],
            description: ""
        },
        {
            title: "پکیج افزایش سایز",
            price: "960,000",
            features: [],
            description: ""
        }
    ]
    return {
        hair_packages,
        sexual_packages
    };
}