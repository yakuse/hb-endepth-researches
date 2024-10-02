import React from 'react';
import Image from 'next/image';
import { RiListUnordered } from '@remixicon/react';
import LinkExternal from '@/atoms/LinkExternal';
import withScale from '@/hoc/withScale';

import hintco from './images/hintco.png';
import table from './images/image_118.png';
import graph from './images/image_117.png';

function Germany3({ scaleRef, scaleStyles }) {
  return (
    <div className="relative aspect-video max-w-3xl bg-white">
      <div
        ref={scaleRef}
        style={scaleStyles}
        className="absolute left-0 top-0 h-full w-full origin-top-left"
      >
        <div className="absolute left-[1023px] top-[196px] h-[332px] w-[647px]">
          <div className="absolute left-0 top-[49px] h-[257px] w-[647px]">
            <Image src={graph} alt="" />
          </div>
          <div className="absolute left-[26px] top-[72px]">
            <svg
              width="16"
              height="176"
              viewBox="0 0 16 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM7.29289 175.707C7.68341 176.098 8.31657 176.098 8.7071 175.707L15.0711 169.343C15.4616 168.953 15.4616 168.319 15.0711 167.929C14.6805 167.538 14.0474 167.538 13.6568 167.929L7.99999 173.586L2.34314 167.929C1.95261 167.538 1.31945 167.538 0.928925 167.929C0.5384 168.319 0.5384 168.953 0.928925 169.343L7.29289 175.707ZM7 1L6.99999 175L8.99999 175L9 1L7 1Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="absolute left-[7px] top-0 h-[332px] w-96">
            <div className="absolute left-[8px] top-0 h-[38px] w-[239px] text-lg font-normal leading-snug text-black">
              10-year purchase contracts with H2 producers
            </div>
            <div className="absolute left-[186px] top-[221px] h-[71px] w-[198px] text-lg font-normal leading-snug text-black">
              1-year sales contracts with H2 customers
            </div>
            <div className="absolute left-0 top-[310px] h-[22px] w-[198px] text-[8px] font-normal leading-[9.60px] text-[#666d73]">
              Source: 2MWK2
            </div>
            <div className="absolute left-[45px] top-[113px] h-[71px] w-[169px] text-lg font-normal leading-snug text-black">
              Price differential compensation analogous to CfD
            </div>
            <div className="absolute left-[45px] top-[93px] h-4 w-[63px]">
              <Image src={hintco} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute left-[960px] top-[151px] h-[0px] w-[809px] origin-top-left rotate-90 border-b border-[#d3d5d7]"></div>
        <div className="absolute left-[993px] top-[564px] inline-flex w-[650px] items-start justify-start gap-2 rounded-xl px-4 py-2">
          <div className="relative h-6 w-6">
            <RiListUnordered size={24} color="#2C53C6" />
          </div>
          <div className="text-xl font-semibold leading-normal text-black">
            Comparison between H2Global and EHB hydrogen auctions
          </div>
        </div>
        <div className="absolute left-[68px] top-[982px] h-[84px] w-[1800px]">
          <div className="absolute left-0 top-0 inline-flex items-center justify-start gap-2">
            <div className="flex items-start justify-start gap-4 py-2">
              <div className="h-[68px] w-[880px] text-[8px] font-normal leading-[12.80px] text-[#666d73]">
                References:
                <br />- [H2Global Stiftung](
                <LinkExternal href="https://h2-global.de/post/kicking-off-import-leg-european-hydrogen-bank" />
                )
                <br />- [Market Ramp-Up Renewable Hydrogen Derivatives H2Global](
                <LinkExternal href="https://files.h2-global.de/Market-Ramp-Up-Renewable-Hydrogen-Derivatives-H2Global.pdf" />
                )
                <br />- [Germany’s 3.5 Billion Euro Boost to Green Hydrogen Import Program Signals
                International Energy Transition - International Trade Council](
                <LinkExternal href="https://tradecouncil.org/germanys-3-5-billion-euro-boost-to-green-hydrogen-import-program/" />
                )
                <br />- [Germany grants €3.5 billion for green hydrogen import program - Offshore
                Energy](
                <LinkExternal href="https://www.offshore-energy.biz/germany-grants-e3-5-billion-for-green-hydrogen-import-program/" />
                )
                <br />
              </div>
              <div className="h-[59px] w-[880px] text-[8px] font-normal leading-[12.80px] text-[#666d73]">
                References:
                <br />- [Hydrogen Strategy Germany and international positioning: goals and funding
                programmes | Rödl & Partner](
                <LinkExternal href="https://www.roedl.com/insights/renewable-energy/2022/september/hydrogen-strategy-germany" />
                )
                <br />- [Germany's H2Global kicks off world’s first green hydrogen subsidy scheme
                with ammonia import tender | Recharge](
                <LinkExternal href="https://www.hydrogeninsight.com/policy/germanys-h2global-kicks-off-world-s-first-green-hydrogen-subsidy-scheme-with-ammonia-import-tender/2-1-1369442" />
                )
                <br />- [BMWK - Federal Ministry for Economic Affairs and Climate Action launches
                first auction procedure for H2Global – €900 million for the purchase of green
                hydrogen derivatives](
                <LinkExternal href="https://www.bmwk.de/Redaktion/EN/Pressemitteilungen/2022/12/20221208-federal-ministry-for-economic-affairs-and-climate-action-launches-first-auction-procedure-for-h2global.html" />
                )
              </div>
            </div>
            <div className="text-base font-normal leading-relaxed text-black">13</div>
          </div>
          <div className="absolute left-0 top-0 h-[0px] w-[1790.06px] border-b border-[#d3d5d7]"></div>
        </div>
        <div className="absolute left-[993px] top-[121px] inline-flex items-start justify-start gap-2 rounded-xl px-4 py-2">
          <div className="relative h-6 w-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 15L8 11" stroke="#2C53C6" strokeLinecap="round" strokeLinejoin="round" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z"
                stroke="#2C53C6"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 16C14.5523 16 15 15.5523 15 15C15 14.4477 14.5523 14 14 14C13.4477 14 13 14.4477 13 15C13 15.5523 13.4477 16 14 16Z"
                stroke="#2C53C6"
              />
              <path
                d="M10 11L13 14"
                stroke="#2C53C6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M15 14L20 9" stroke="#2C53C6" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="2" y1="19.5" x2="21" y2="19.5" stroke="#2C53C6" />
              <line x1="2.5" y1="20" x2="2.5" y2="3" stroke="#2C53C6" />
            </svg>
          </div>
          <div className="w-[750px] text-xl font-semibold leading-normal text-black">
            Hintco compensation mechanism over time during market development
          </div>
        </div>
        <div className="absolute left-[1009px] top-[604px] h-[353px] w-[824px]">
          <Image src={table} alt="" />
        </div>
        <div className="absolute left-[60px] top-[16px] inline-flex flex-col items-start justify-start gap-4">
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="inline-flex items-center justify-start gap-4">
              <div className="inline-flex w-[1666.50px] flex-col items-start justify-start gap-2">
                <div className="text-center text-lg font-normal leading-[28.80px] text-[#666d73]">
                  Germany - Market Feedbacks
                </div>
                <div className="title-h1 self-stretch text-[32px] font-medium leading-[37.12px] text-[#242e37]">
                  H2Global operates through a unique double-auction mechanism, which involves supply
                  and demand sides, two stages
                </div>
              </div>
              <div className="relative h-[50px] w-[117.50px]">
                <img src="/images/logo.png" alt="" />
              </div>
            </div>
            <div className="h-[0px] w-[1794px] border-b border-[#d3d5d7]"></div>
          </div>
        </div>
        <div className="absolute left-[605px] top-[202px] h-[35px] w-[266px]">
          <span className="text-lg font-normal leading-snug text-black">
            1 year <br />
          </span>
          <span className="block w-fit text-right text-lg font-semibold leading-snug text-[#2b52c5]">
            Hydrogen Surve Agreement
            <span className="block"></span>
            (HSA)
          </span>
        </div>
        <div className="absolute left-[427px] top-[188px] h-[37px] w-[146px]">
          <Image src={hintco} alt="" />
        </div>
        <div className="absolute left-[153px] top-[202px] h-[35px] w-[266px]">
          <span className="text-lg font-normal leading-snug text-black">
            10 year <br />
          </span>
          <span className="text-lg font-semibold leading-snug text-[#2b52c5]">
            Hydrogen Purchase Agreement
            <br />
            (HPA)
          </span>
        </div>
        <div className="absolute left-[521px] top-[294px] inline-flex flex-col items-start justify-start gap-4 rounded-2xl border border-[#99c7ff] bg-[#c9d3fb]/30 p-4">
          <div className="inline-flex h-[69px] w-[350px] items-center justify-center gap-2.5 rounded-xl border border-[#e9eaeb] bg-[#2b52c5] px-4 py-3">
            <div className="shrink grow basis-0 text-center text-lg font-semibold leading-[28.80px] text-white">
              Demand Side
            </div>
          </div>
          <div className="w-[350px]">
            <span className="text-lg font-semibold leading-[28.80px] text-black">Objectives</span>
            <span className="text-lg font-normal leading-[28.80px] text-black">
              : Sell the procured renewable hydrogen to European customers through short-term
              contracts.
            </span>
          </div>
          <div className="h-[0px] w-[350px] border-b border-[#c9d3fb]"></div>
          <div className="w-[350px]">
            <span className="text-lg font-semibold leading-[28.80px] text-black">Process</span>
            <span className="text-lg font-normal leading-[28.80px] text-black">
              : Hintco conducts separate auctions to sell the hydrogen to the highest bidders within
              the EU.
            </span>
          </div>
          <div className="h-[0px] w-[350px] border-b border-[#c9d3fb]"></div>
          <div className="w-[350px]">
            <span className="text-lg font-semibold leading-[28.80px] text-black">Contracts</span>
            <span className="text-lg font-normal leading-[28.80px] text-black">
              : Short-term contracts are awarded to the highest bidders, ensuring competitive
              pricing and market liquidity.
            </span>
          </div>
        </div>
        <div className="absolute left-[79px] top-[122px] h-[53px] w-[840px] text-lg font-normal leading-[28.80px] text-black">
          H2Global, established in 2021, is a German initiative designed to accelerate the
          development and market ramp-up of renewable hydrogen and its derivatives.
        </div>
        <div className="absolute left-[69px] top-[821px] h-[137px] w-[840px]">
          <div className="mb-2.5 text-lg font-normal leading-snug text-black">
            <span className="font-semibold">Funding Source: </span>
            <span>
              The German Federal Ministry for Economic Affairs and Climate Action (BMWK) has
              allocated significant funds to cover this gap. For instance, a €900 million funding
              window was initially provided, followed by an additional €3.5 billion in 2023.
            </span>
          </div>
          <div className="text-lg font-normal leading-snug text-black">
            <span className="font-semibold">Utilization: </span>
            <span>
              Public funds are only drawn upon once the physical delivery of hydrogen takes place,
              minimizing the risk of subsidizing stranded assets.
            </span>
          </div>
        </div>
        <div className="absolute left-[69px] top-[290px] inline-flex flex-col items-start justify-start gap-4 rounded-2xl border border-[#99c7ff] bg-[#c9d3fb]/30 p-4">
          <div className="inline-flex h-[69px] w-[350px] items-center justify-center gap-2.5 rounded-xl border border-[#e9eaeb] bg-[#2b52c5] px-4 py-3">
            <div className="shrink grow basis-0 text-center text-lg font-semibold leading-[28.80px] text-white">
              Supply Side
            </div>
          </div>
          <div className="w-[350px]">
            <span className="text-lg font-semibold leading-[28.80px] text-black">Objectives</span>
            <span className="text-lg font-normal leading-[28.80px] text-black">
              : Secure long-term purchase contracts for renewable hydrogen and its derivatives from
              international producers.
            </span>
          </div>
          <div className="h-[0px] w-[350px] border-b border-[#c9d3fb]"></div>
          <div className="w-[350px]">
            <span className="text-lg font-semibold leading-[28.80px] text-black">Process</span>
            <span className="text-lg font-normal leading-[28.80px] text-black">
              : Hintco conducts competitive auctions to procure renewable hydrogen at the lowest
              possible prices.
            </span>
          </div>
          <div className="h-[0px] w-[350px] border-b border-[#c9d3fb]"></div>
          <div className="w-[350px]">
            <span className="text-lg font-semibold leading-[28.80px] text-black">Contracts</span>
            <span className="text-lg font-normal leading-[28.80px] text-black">
              : Long-term Hydrogen Purchase Agreements (HPAs) are established, providing producers
              with price, volume, and legal certainty, thereby ensuring investment security
            </span>
          </div>
        </div>
        <div className="pointer-events-none absolute left-[500px] top-[232px]">
          <svg
            width="212"
            height="58"
            viewBox="0 0 212 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M208.355 57.3519C208.161 57.5481 207.844 57.5495 207.648 57.3552L204.451 54.188C204.255 53.9936 204.254 53.677 204.448 53.4809C204.643 53.2847 204.959 53.2832 205.155 53.4776L207.997 56.2929L210.812 53.4514C211.006 53.2552 211.323 53.2538 211.519 53.4481C211.715 53.6425 211.717 53.9591 211.522 54.1552L208.355 57.3519ZM1.1157 24.9891L1.11843 25.4891L0.618027 25.4919L0.61571 24.9915L1.1157 24.9891ZM207.847 23.8617L207.844 23.3617L208.344 23.359L208.347 23.8594L207.847 23.8617ZM1.49999 -0.00231552L1.6157 24.9868L0.61571 24.9915L0.500005 0.00231552L1.49999 -0.00231552ZM1.11298 24.4892L207.844 23.3617L207.849 24.3617L1.11843 25.4891L1.11298 24.4892ZM208.347 23.8594L208.5 56.9977L207.5 57.0023L207.347 23.864L208.347 23.8594Z"
              fill="#99C7FF"
            />
          </svg>
        </div>
        <div className="absolute left-[262px] top-[232px]">
          <svg
            width="212"
            height="57"
            viewBox="0 0 212 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.91021 56.8536C4.10551 57.0488 4.42209 57.0487 4.61731 56.8534L7.79854 53.6707C7.99376 53.4754 7.99368 53.1588 7.79838 52.9636C7.60307 52.7684 7.2865 52.7685 7.09128 52.9638L4.26351 55.7929L1.43441 52.9651C1.23911 52.7699 0.922533 52.7699 0.727314 52.9653C0.532095 53.1606 0.532176 53.4771 0.72748 53.6724L3.91021 56.8536ZM210.758 24.5606L210.758 25.0606L211.259 25.0608L211.258 24.5605L210.758 24.5606ZM4.25618 24.5099L4.25631 24.0099L3.75606 24.0098L3.75618 24.5101L4.25618 24.5099ZM210.253 0.437515L210.258 24.5608L211.258 24.5605L211.253 0.437281L210.253 0.437515ZM210.759 24.0606L4.25631 24.0099L4.25606 25.0099L210.758 25.0606L210.759 24.0606ZM3.75618 24.5101L3.76367 56.5001L4.76368 56.4998L4.75619 24.5098L3.75618 24.5101Z"
              fill="#99C7FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default withScale(Germany3);
