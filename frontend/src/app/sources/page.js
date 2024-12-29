import Layout from '../components/layout'

export default function Sources() {
  const sources = [
    {
      name: "Dietary Guidelines for Americans - U.S. Department of Agriculture",
      url: "https://www.dietaryguidelines.gov",
      description: "Provides recommendations for nutrient intake across different age groups."
    },
    {
      name: "World Health Organization (WHO) Nutrition Guidelines",
      url: "https://www.who.int/nutrition",
      description: "International guidelines for healthy eating and nutrient intake."
    },
    {
      name: "Food and Drug Administration (FDA) Nutritional Labeling",
      url: "https://www.fda.gov",
      description: "Provides standardized nutrient labeling for food products."
    },
    {
      name: "Centers for Disease Control and Prevention (CDC) Nutrition",
      url: "https://www.cdc.gov/nutrition",
      description: "Provides evidence-based nutrition guidelines."
    },
    {
      name: "The Academy of Nutrition and Dietetics",
      url: "https://www.eatright.org",
      description: "Offers expert advice on nutrition and health, including daily intake recommendations."
    }
  ]

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Sources</h1>
        <div className="space-y-8">
          {sources.map((source, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {source.name}
                  </a>
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{source.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

