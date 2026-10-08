import type { ServiceSlug } from '@/data/serviceDetails';

// Chinese editorial headings address the reader's business need in each section.
// Keep official service names in navigation; these are purpose-written page copy.
export const chineseServiceCopy: Record<ServiceSlug, { introHeading: string; ctaHeading: string }> = {
  'audit-assurance': {
    introHeading: '聚焦业务风险，严谨开展审计',
    ctaHeading: '提前安排审计，为报告期限留足时间',
  },
  'corporate-advisory': {
    introHeading: '为上市与并购，做好财务准备',
    ctaHeading: '您的上市或并购计划，我们一起梳理',
  },
  'restructuring-advisory': {
    introHeading: '先看清问题，再判断出路',
    ctaHeading: '越早评估，越有机会保留选择',
  },
  'tax-advisory': {
    introHeading: '把税务安排，做在决策之前',
    ctaHeading: '有税务疑问？与专业团队讨论适用安排',
  },
  'china-malaysia-desk': {
    introHeading: '落地马来西亚，先把基础理清',
    ctaHeading: '您的马来西亚计划，从一次专业咨询开始',
  },
  'accounting-payroll-outsourcing': {
    introHeading: '账目清楚，薪资有序',
    ctaHeading: '让日常财务工作，更有条理',
  },
};
