import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-medium text-gray-900">AMORE:CYCLE</h1>
          <p className="text-sm text-gray-500">캠페인 소개</p>
        </div>
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">대시보드로</Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-10 space-y-8">

        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">AMORE:CYCLE이란?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            AMORE:CYCLE[아모레리사이클]은 다 쓴 화장품 용기를 아모레퍼시픽 공식 온라인몰과 오프라인 매장에서 회수하여 재활용하는 프로그램입니다.
            수거된 화장품 용기는 가능한 다양한 방법으로 재활용되며, 땅에 매립되거나 소각되는 폐기물을 최소화하는데 기여합니다.
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mt-6">
            아모레퍼시픽그룹은 용기수거 캠페인을 통해 2009년부터 2025년까지 누적량 2,840톤의 화장품 용기를 수거했습니다.
            2025년 한 해에만 119톤을 수거 했고, 약 16만 명이 참여해 170만 병 이상의 용기가 회수되었습니다.
            또한 2024년 1월부터는 기존 오프라인 중심의 서비스를 온라인(아모레몰)으로 확대해 고객 편의성을 높였고, 재활용 비중을 높이기 위해 수거 품목도 크게 확장했습니다.
          
    
  
          </p>
        </div>

        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">공병 재활용이 왜 중요한가요?</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-800">플라스틱 매립 감소</p>
              <p className="text-sm text-gray-600 leading-relaxed">화장품 용기는 복합 재질로 이루어져 일반 재활용이 어렵습니다. 공병 수거를 통해 전문적으로 처리하면 매립 및 소각을 크게 줄일 수 있습니다.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">탄소 배출 절감</p>
              <p className="text-sm text-gray-600 leading-relaxed">공병 1개를 재활용하면 약 8g의 CO2 배출을 줄일 수 있습니다. 작은 실천이 모이면 큰 변화를 만들어낼 수 있습니다.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">자원 순환</p>
              <p className="text-sm text-gray-600 leading-relaxed">재활용된 플라스틱은 새로운 제품의 원료로 사용되어 자원의 선순환을 만들어냅니다.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">어떻게 참여하나요?</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="bg-green-100 text-green-700 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <p className="text-sm text-gray-600">다 쓴 화장품 공병을 모아주세요. 브랜드 상관없이 수거 가능합니다.</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-green-100 text-green-700 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <p className="text-sm text-gray-600">308관 또는 309관 기숙사 1층에 설치된 공병 수거함에 넣어주세요.</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-green-100 text-green-700 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <p className="text-sm text-gray-600">수거된 공병은 아모레리사이클을 통해 전문적으로 재활용됩니다.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl border border-green-200 p-6 text-center">
          <p className="text-sm text-green-800 font-medium mb-1">AMORE:CYCLE 캠페인</p>
          <p className="text-sm text-green-700 mb-3">더 자세한 내용은 아모레퍼시픽 공식 사이트에서 확인하세요</p>
          <Link
            href="https://www.amoremall.com/kr/ko/display/event_detail?planDisplaySn=13143&srsltid=AfmBOooB24YE9x69CZlvkX39koe0jEjRaeDP4nsv6xqfRcPMHoJsFLAm"
            target="_blank"
            className="inline-block bg-green-600 text-white text-sm rounded-lg px-4 py-2 hover:bg-green-700"
          >
            공식 사이트 바로가기
          </Link>
        </div>

      </div>
    </main>
  )
}
