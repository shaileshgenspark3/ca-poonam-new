export function SchemaOrg() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://capoonampathak.com/#person",
                name: "CA Poonam Pathak",
                jobTitle: [
                    "Chartered Accountant",
                    "Business Advisor",
                    "Independent Director",
                ],
                description:
                    "Top 40 FinFluencer of the Year 2024. IICA Qualified Independent Director with 8+ years of expertise in taxation, audit, corporate advisory, and NRI financial planning.",
                url: "https://capoonampathak.com",
                telephone: "+917506665063",
                email: "connect@capoonampathak.com",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "204, Suncity Avenue, Sector 10, Kharghar",
                    addressLocality: "Navi Mumbai",
                    addressRegion: "Maharashtra",
                    postalCode: "410210",
                    addressCountry: "IN",
                },
                knowsAbout: [
                    "Income Tax",
                    "NRI Taxation",
                    "Audit and Assurance",
                    "GST",
                    "Company Law",
                    "POSH Compliance",
                    "Independent Directorship",
                    "Fractional CFO Services",
                ],
                memberOf: [
                    {
                        "@type": "Organization",
                        name: "Institute of Chartered Accountants of India (ICAI)",
                    },
                    {
                        "@type": "Organization",
                        name: "WIRC of ICAI",
                    },
                ],
                award: [
                    "Top 40 FinFluencer of the Year 2024 – FTLD",
                    "WIRC Star Women Award",
                ],
                sameAs: [
                    "https://www.linkedin.com/in/capoonampathak",
                    "https://twitter.com/capoonampathak",
                    "https://www.instagram.com/capoonampathak",
                    "https://www.youtube.com/@capoonampathak",
                ],
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://capoonampathak.com/#business",
                name: "CA Poonam Pathak – Chartered Accountant",
                description:
                    "Professional chartered accountancy firm offering audit & assurance, NRI taxation, corporate advisory, GST, MCA compliance, and fractional CFO services in Navi Mumbai.",
                url: "https://capoonampathak.com",
                telephone: "+917506665063",
                email: "connect@capoonampathak.com",
                priceRange: "₹₹₹",
                currenciesAccepted: "INR",
                paymentAccepted: "Cash, Bank Transfer, UPI",
                image: "https://capoonampathak.com/images/headshot.png",
                logo: "https://capoonampathak.com/favicon.svg",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "204, Suncity Avenue, Sector 10, Kharghar",
                    addressLocality: "Navi Mumbai",
                    addressRegion: "Maharashtra",
                    postalCode: "410210",
                    addressCountry: "IN",
                },
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: "19.0477",
                    longitude: "73.0713",
                },
                openingHoursSpecification: [
                    {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: "09:30",
                        closes: "18:30",
                    },
                ],
                serviceArea: {
                    "@type": "GeoCircle",
                    geoMidpoint: {
                        "@type": "GeoCoordinates",
                        latitude: "19.0477",
                        longitude: "73.0713",
                    },
                    geoRadius: "50000",
                },
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Professional CA Services",
                    itemListElement: [
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Income Tax Filing & Planning" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI Taxation Advisory" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Statutory Audit & Assurance" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Compliance" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "POSH Compliance Consulting" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fractional CFO Services" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Independent Director Services" } },
                    ],
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "50",
                    bestRating: "5",
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
