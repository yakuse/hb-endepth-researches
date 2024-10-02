import React from 'react';
import { RiListUnordered } from '@remixicon/react';
import LinkExternal from '@/atoms/LinkExternal';
import withScale from '@/hoc/withScale';

function UK2({ scaleRef, scaleStyles }) {
  return (
    <div className="relative aspect-video max-w-3xl bg-white">
      <div
        ref={scaleRef}
        style={scaleStyles}
        className="absolute left-0 top-0 h-full w-full origin-top-left"
      >
        <div className="absolute left-[55px] top-[16px] h-[1050px] w-[1834px]">
          <div className="absolute left-[13px] top-[159px] inline-flex h-[587px] w-[1006px] flex-col items-end justify-start gap-2">
            <div className="inline-flex items-start justify-start gap-4">
              <div className="flex h-20 w-[400px] items-start justify-start gap-2.5 rounded-bl-xl rounded-tr-xl bg-[#2b52c5] px-4 py-2">
                <div className="text-xl font-normal leading-loose text-black">🇬🇧</div>
                <div className="shrink grow basis-0 text-xl font-normal leading-loose text-white">
                  Low Carbon Hydrogen Business Model (LCHA)
                </div>
              </div>
              <div className="flex h-20 w-[400px] items-start justify-start gap-2.5 rounded-bl-xl rounded-tr-xl bg-[#c4dfff] px-4 py-2">
                <div className="text-xl font-normal leading-loose text-black">🇪🇺</div>
                <div className="shrink grow basis-0 text-xl font-normal leading-loose text-black">
                  European Hydrogen Bank (EHB) Auction
                </div>
              </div>
            </div>
            <div className="inline-flex items-start justify-start gap-2">
              <div className="flex h-[108px] w-[189px] items-center justify-start gap-2.5 rounded-xl bg-[#2b52c5] p-4">
                <div className="w-[173px] text-lg font-normal leading-[28.80px] text-white">
                  Support Mechanism
                </div>
              </div>
              <div className="flex h-[108px] w-[400px] items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-lg font-normal leading-[28.80px] text-black">
                  CfD mechanism, providing revenue stabilization by covering the difference between
                  a reference price and a strike price.
                </div>
              </div>
              <div className="flex h-[108px] w-[400px] items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-lg font-normal leading-[28.80px] text-black">
                  Uses a fixed premium per kilogram of hydrogen produced, awarded through a
                  pay-as-bid auction.
                </div>
              </div>
            </div>
            <div className="inline-flex items-start justify-start gap-2">
              <div className="flex h-[108px] w-[189px] items-center justify-start gap-2.5 rounded-xl bg-[#567cc7] p-4">
                <div className="w-[173px] text-lg font-normal leading-[28.80px] text-white">
                  Price Risk
                </div>
              </div>
              <div className="flex h-[108px] w-[400px] items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-lg font-normal leading-[28.80px] text-black">
                  Reference price floored at the natural gas price, with a mechanism to share
                  benefits of higher sales prices.
                </div>
              </div>
              <div className="flex h-[108px] w-[400px] items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-lg font-normal leading-[28.80px] text-black">
                  Fixed premium with no indexation for electricity price changes or inflation.
                </div>
              </div>
            </div>
            <div className="inline-flex items-start justify-start gap-2">
              <div className="flex h-[108px] w-[189px] items-center justify-start gap-2.5 rounded-xl bg-[#81a6c7] p-4">
                <div className="w-[173px] text-lg font-normal leading-[28.80px] text-black">
                  Volume & Capacity
                </div>
              </div>
              <div className="flex h-[108px] w-[400px] items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-lg font-normal leading-[28.80px] text-black">
                  Includes a "sales cap" to prevent over-subsidy and manage volume risk.
                </div>
              </div>
              <div className="flex h-[108px] w-[400px] items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-lg font-normal leading-[28.80px] text-black">
                  Minimum project size of 5MW electrolyser capacity, with no upper or lower limits
                  on expected yearly production.
                </div>
              </div>
            </div>
            <div className="inline-flex w-full items-start justify-start gap-2">
              <div className="flex h-[61px] w-[189px] items-center justify-start gap-2.5 rounded-xl bg-[#abcfc8] p-4">
                <div className="w-[173px] text-lg font-normal leading-[28.80px] text-black">
                  Price Ceiling
                </div>
              </div>
              <div className="flex h-[53px] w-[400px] items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 text-lg font-normal leading-[28.80px] text-black">
                  None
                </div>
              </div>
              <div className="flex h-[53px] w-[400px] items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 text-lg font-normal leading-[28.80px] text-black">
                  EUR 4.50/kg
                </div>
              </div>
            </div>
            <div className="inline-flex items-start justify-start gap-2">
              <div className="flex w-[189px] items-center justify-start gap-2.5 self-stretch rounded-xl bg-[#d5f8c8] p-4">
                <div className="w-[173px] text-lg font-normal leading-[28.80px] text-black">
                  Timeline
                </div>
              </div>
              <div className="flex h-[82px] w-[400px] items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-lg font-normal leading-[28.80px] text-black">
                  Requires projects to reach FID within three months of contract award.
                </div>
              </div>
              <div className="flex h-[82px] w-[400px] items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-lg font-normal leading-[28.80px] text-black">
                  Projects must start production within five years of signing the grant agreement
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[18px] top-[777px] h-44 w-[1000px]">
            <div className="mb-2 text-lg font-normal leading-[27px] text-black">
              Other measures:
            </div>
            <div className="text-lg font-normal leading-[27px] text-black">
              <ul className="ml-5 list-disc">
                <li className="mb-2">
                  Eligibility: Supports newly constructed hydrogen facilities meeting the UK Low
                  Carbon Hydrogen Standard. Existing producers retrofitting CCUS technology are not
                  eligible.
                </li>
                <li className="mb-2">
                  Blending: BEIS has not yet decided on blending hydrogen into the gas grid, viewing
                  it as a transitional option.
                </li>
                <li>
                  Export: Projects exporting hydrogen are eligible, but exported volumes are not
                  eligible for support payments.
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute left-[1055px] top-[110px] h-[433px] w-[779px]">
            <ul className="ml-6 list-disc text-lg font-normal leading-[27px] text-black">
              <li className="mb-2.5">
                <strong className="font-semibold">Strike Price</strong>: The guaranteed price per
                unit of hydrogen that covers production costs and provides an allowed return on
                investment.
              </li>
              <li className="mb-2.5">
                <strong className="font-semibold">Reference Price</strong>: The actual market price
                achieved for hydrogen sales. For hydrogen, this is often linked to the natural gas
                price to provide a floor price.
              </li>
              <li className="mb-2.5">
                <strong className="font-semibold">Payment Mechanism</strong>: If the market price
                (reference price) is below the strike price, the government pays the difference to
                the producer. Conversely, if the market price is above the strike price, the
                producer pays the difference to the government.
              </li>
              <li className="mb-2.5">
                <strong className="font-semibold">Volume Risk Management</strong>: The scheme
                includes mechanisms to manage volume risk, ensuring producers receive additional
                subsidies if their sales volumes fall below expected levels.
              </li>
              <li className="mb-2.5">
                <strong className="font-semibold">Cost Estimate</strong>: The UK government
                estimated an average of £100/MWh for blue and green hydrogen. The selling price is
                assumed to be £55/MWh, creating a cost gap of £45/MWh.
              </li>
              <li>
                To support 10GW of hydrogen production, the government estimates that £3.5 billion
                per year will be required from 2030, totaling approximately £53 billion over a
                20-year period
              </li>
            </ul>
          </div>
          <div className="absolute left-0 top-[109px] inline-flex h-8 items-start justify-start gap-2 rounded-xl px-4 pt-2">
            <div className="relative h-6 w-6">
              <div className="absolute left-0 top-0 h-6 w-6">
                <RiListUnordered size={24} color="#2C53C6" />
              </div>
            </div>
            <div className="text-xl font-medium leading-normal text-black">
              Key differences between UK and EU hydrogen auction in design
            </div>
          </div>
          <div className="absolute left-[1049px] top-[560px] inline-flex h-8 items-start justify-start gap-2 rounded-xl px-4 pt-2">
            <div className="relative h-6 w-6">
              <div className="absolute left-0 top-0 h-6 w-6">
                <RiListUnordered size={24} color="#2C53C6" />
              </div>
            </div>
            <div className="text-xl font-medium leading-normal text-black">
              Key differences First Hydrogen Allocation Round (HAR1) and EHB auction
            </div>
          </div>
          <div className="absolute left-[1065px] top-[607px] h-[355px] w-[728px]">
            <div className="absolute left-[1px] top-[58px] inline-flex h-[53px] w-full items-start justify-start gap-2">
              <div className="flex w-[250px] items-center justify-start gap-2.5 self-stretch rounded-xl bg-[#2b52c5] px-4 py-3">
                <div className="text-lg font-normal leading-[28.80px] text-white">
                  Total Capacity Awarded
                </div>
              </div>
              <div className="flex h-[53px] flex-1 items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-center text-lg font-normal leading-[28.80px] text-black">
                  125 MW
                </div>
              </div>
              <div className="flex h-[53px] flex-1 items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-center text-lg font-normal leading-[28.80px] text-black">
                  1.5 GW
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-[119px] inline-flex h-[53px] w-full items-start justify-start gap-2">
              <div className="flex w-[250px] items-center justify-start gap-2.5 self-stretch rounded-xl bg-[#567cc7] px-4 py-3">
                <div className="text-lg font-normal leading-[28.80px] text-white">
                  Number of Projects
                </div>
              </div>
              <div className="flex h-[53px] flex-1 items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-center text-lg font-normal leading-[28.80px] text-black">
                  11
                </div>
              </div>
              <div className="flex h-[53px] flex-1 items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 self-stretch text-center text-lg font-normal leading-[28.80px] text-black">
                  7
                </div>
              </div>
            </div>
            <div className="absolute left-[1px] top-[180px] inline-flex h-[53px] w-full items-start justify-start gap-2">
              <div className="flex w-[250px] items-center justify-start gap-2.5 self-stretch rounded-xl bg-[#81a6c7] px-4 py-3">
                <div className="text-lg font-normal leading-[28.80px] text-black">Strike Price</div>
              </div>
              <div className="flex h-[53px] flex-1 items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="h-[29px] w-[202px] text-center">
                  <span className="text-lg font-normal leading-[28.80px] text-black">
                    £8.03/kg{' '}
                  </span>
                  <span className="text-xs font-normal leading-tight text-black">(£241/MWh)</span>
                </div>
              </div>
              <div className="flex h-[53px] flex-1 items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 text-center text-lg font-normal leading-[28.80px] text-black">
                  €0.37 - 0.48/kg
                </div>
              </div>
            </div>
            <div className="absolute left-[1px] top-[241px] inline-flex h-[53px] w-full items-start justify-start gap-2">
              <div className="flex w-[250px] items-center justify-start gap-2.5 self-stretch rounded-xl bg-[#abcfc8] px-4 py-3">
                <div className="text-lg font-normal leading-[28.80px] text-black">
                  Total Subsidy
                </div>
              </div>
              <div className="flex h-[53px] flex-1 items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="w-[202px] text-center text-lg font-normal leading-[28.80px] text-black">
                  GBP 2 billion
                </div>
              </div>
              <div className="flex h-[53px] flex-1 items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 text-center text-lg font-normal leading-[28.80px] text-black">
                  EUR 720 million
                </div>
              </div>
            </div>
            <div className="absolute left-[2px] top-[302px] inline-flex h-[53px] w-full items-start justify-start gap-2">
              <div className="flex w-[250px] items-center justify-start gap-2.5 self-stretch rounded-xl bg-[#d5f8c8] px-4 py-3">
                <div className="text-lg font-normal leading-[28.80px] text-black">Duration</div>
              </div>
              <div className="flex h-[53px] flex-1 items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="w-[202px] text-center text-lg font-normal leading-[28.80px] text-black">
                  15 years
                </div>
              </div>
              <div className="flex h-[53px] flex-1 items-start justify-start gap-2.5 bg-[#f8f9f9] px-4 py-3">
                <div className="shrink grow basis-0 text-center text-lg font-normal leading-[28.80px] text-black">
                  10 years
                </div>
              </div>
            </div>
            <div className="absolute left-[258px] top-0 inline-flex h-[52px] items-start justify-start gap-2">
              <div className="flex h-[52px] w-[232px] items-start justify-start gap-2.5 rounded-bl-xl rounded-tr-xl bg-[#2b52c5] px-4 py-2">
                <div className="text-2xl font-normal leading-9 text-black">🇬🇧</div>
                <div className="w-[109px] text-xl font-normal leading-loose text-white">
                  UK Auction
                </div>
              </div>
              <div className="flex h-12 w-[232px] items-start justify-start gap-2.5 rounded-bl-xl rounded-tr-xl bg-[#c4dfff] px-4 py-2">
                <div className="text-xl font-normal leading-loose text-black">🇪🇺</div>
                <div className="w-[109px] text-xl font-normal leading-loose text-black">
                  EU Auction
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[13px] top-[966px] h-[84px] w-[1800px]">
            <div className="absolute left-0 top-0 inline-flex items-center justify-start gap-2">
              <div className="flex items-start justify-start gap-4 py-2">
                <div className="h-[68px] w-[880px] text-[8px] font-normal leading-[12.80px] text-[#666d73]">
                  <div>References:</div>
                  <div>
                    - [UK Hydrogen Policy](
                    <LinkExternal href="https://www.globalenergyblog.com/uk-hydrogen-policy-takes-shape-6-update-on-the-low-carbon-hydrogen-business-model/" />
                    )
                  </div>
                  <div>
                    - [EU Hydrogen Bank Auction](
                    <LinkExternal href="https://ec.europa.eu/commission/presscorner/detail/en/ip_23_5982" />
                    )
                  </div>
                  <div>
                    - [European Hydrogen Bank Pilot Auction Results](
                    <LinkExternal href="https://www.hydrogeninsight.com/policy/eu-to-reveal-winners-of-first-green-hydrogen-subsidy-auction-at-end-of-april/2-1-1624631" />
                    )
                  </div>
                  <div>
                    - [Aurora Energy Research on EU Hydrogen Bank](
                    <LinkExternal href="https://globuc.com/news/aurora-european-hydrogen/" />)
                  </div>
                </div>
                <div className="h-[59px] w-[880px] text-[8px] font-normal leading-[12.80px] text-[#666d73]">
                  <div>References:</div>
                  <div>
                    - [Hydrogen Insight](
                    <LinkExternal href="https://www.hydrogeninsight.com/production/uk-allocates-more-than-2bn-of-subsidies-to-11-green-hydrogen-projects-in-first-auction-round/2-1-1571272" />
                    )
                  </div>
                  <div>
                    - [GOV.UK](
                    <LinkExternal href="https://www.gov.uk/government/publications/hydrogen-production-business-model-net-zero-hydrogen-fund-shortlisted-projects/hydrogen-production-business-model-net-zero-hydrogen-fund-har1-successful-projects" />
                    )
                  </div>
                  <div>
                    - [S&P Global Commodity Insights](
                    <LinkExternal href="https://www.spglobal.com/commodityinsights/en/market-insights/latest-news/energy-transition/121423-first-uk-green-hydrogen-funding-round-awards-just-half-of-250-mw-capacity" />
                    )
                  </div>
                  <div>
                    - [RenewableUK's View on Hydrogen Auctions](
                    <LinkExternal href="https://cdn.ymaws.com/www.renewableuk.com/resource/resmgr/media/renewableuk_business_model_f.pdf" />
                    )
                  </div>
                </div>
              </div>
              <div className="text-base font-normal leading-relaxed text-black">2</div>
            </div>
            <div className="absolute left-0 top-0 h-[0px] w-[1790.06px] border border-b-0 border-[#d3d5d7]"></div>
          </div>
          <div className="absolute left-[5px] top-0 inline-flex h-[90px] flex-col items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="inline-flex items-center justify-start gap-4">
                <div className="inline-flex w-[1666.50px] flex-col items-start justify-start gap-2">
                  <div className="text-center">
                    <span className="text-lg font-normal leading-[28.80px] text-[#666d73]">
                      UK -{' '}
                    </span>
                    <span className="text-lg font-normal leading-[28.80px] text-[#666d73]">
                      Eligibility and Qualification Criteria{' '}
                    </span>
                  </div>
                  <div className="title-h1 self-stretch text-[32px] font-medium leading-[37.12px] text-[#242e37]">
                    Hydrogen Production Business Model (HPBM) contracts-for-difference (CfD) based
                    auction model
                  </div>
                </div>
                <div className="absolute right-0 top-[12px] h-[50px] w-[117.50px]">
                  <img className="w-full" src="/images/logo.png" alt="" />
                </div>
              </div>
              <div className="h-[0px] w-[1794px] border border-b-0 border-[#d3d5d7]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withScale(UK2);
