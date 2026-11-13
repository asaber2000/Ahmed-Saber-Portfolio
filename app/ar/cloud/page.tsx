'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarAr from '@/components/ar/NavbarAr';
import FooterAr from '@/components/ar/FooterAr';

const getImgSrc = (name: string) => {
  if (!name) return '';
  const cleanPath = name.startsWith('/') ? name : `/${name}`;
  return encodeURI(cleanPath);
};

interface TechnicalStep {
  title: string;
  desc: string;
  subPoints?: string[];
}

interface PhaseItem {
  name: string;
  tools: string;
  content?: React.ReactNode;
  desc?: string;
  detailedStepsTitle?: string;
  detailedSteps?: TechnicalStep[];
  howDataIsRead?: string;
  sqlQuery?: string;
  sqlQueryIntro?: string;
  thePowerOfVisualization?: string;
  realValue?: string;
  realValueTitle?: string;
  keyActions?: string[];
  imagePath?: string | string[];
  figureCaption?: string | string[];
}

interface CloudProject {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  techStack: string[];
  summary: string;
  detailedOverview: string;
  whyAws: string;
  phases: PhaseItem[];
  keyTakeaway?: string;
  conclusionContent?: React.ReactNode;
  coverImage: string;
}

const cloudProjects: CloudProject[] = [
  {
    id: 'seo-analytics-pipeline',
    tag: 'بنية سحابية بدون خوادم (Serverless ETL)',
    title: 'خط أنابيب تحليلات السيو اللحظية (Real-Time SEO Data Pipeline)',
    subtitle: '🚀 معالجة وتحليل بيانات محركات البحث لحظياً عبر البنية السحابية لـ AWS',
    techStack: ['AWS Kinesis Firehose', 'Amazon S3', 'AWS Glue', 'Amazon Athena', 'Amazon QuickSight'],
    summary:
      'صممت ونفذت بنية سحابية متكاملة تعمل دون الحاجة لإدارة خوادم (Serverless) لاستقبال وتخزين وتحليل بيانات زيارات السيو لحظياً. يحوّل هذا النظام تدفق البيانات الخام إلى رؤى بصرية تفاعلية مباشرة، مما يلغي التأخير المعتاد في التقارير التقليدية ويخفض التكاليف التشغيلية إلى الحد الأدنى.',
    detailedOverview:
      'يستعرض هذا المشروع هندسة بيانات سحابية قائمة على الأحداث (Event-Driven) مصممة لاستيعاب ومعالجة كميات ضخمة من بيانات السيو المتدفقة. بالاعتماد على خدمات AWS المدارة بالكامل، بنيت نظاماً قابلاً للتوسع التلقائي يحوّل بيانات الزيارات الخام إلى لوحات تحكم تحليلية دقيقة، مع ضمان أعلى درجات التوافر (High Availability) والدفع فقط مقابل الاستهلاك الفعلي.',
    whyAws:
      'تعاني تقارير Google Analytics و Search Console التقليدية من تأخير في معالجة البيانات. باستخدام AWS Kinesis Firehose وبحيرات البيانات في Amazon S3، يتم تقسيم البيانات المتدفقة وفهرستها تلقائياً عبر AWS Glue، ثم الاستعلام عنها مباشرة باستخدام SQL بدون خوادم عبر Athena دون تكبد تكلفة تشغيل خوادم دائمة.',
    phases: [
      {
        name: 'المرحلة الأولى: استقبال البيانات المتدفقة لحظياً',
        tools: 'Amazon Kinesis Data Firehose',
        desc: 'للتعامل مع البيانات الحية فور حدوثها، قمت بإعداد مسار تدفق عبر Kinesis Firehose ليعمل كـ "مضخة ذكية" ونقطة الدخول الرئيسية لجميع أحداث السيو الواردة؛ حيث يستقبل البيانات وينظمها ويضغطها تلقائياً قبل توجيهها إلى مستودع التخزين النهائي.',
        realValue:
          'الميزة الجوهرية في Firehose هي كونه خدمة سحابية مدارة بالكامل (Serverless)؛ فلم أحتج لكتابة أكواد معقدة أو إدارة خوادم لاستقبال البيانات، إذ يتولى النظام دورة الاستيعاب بالكامل ويتوسع تلقائياً مع زيادة حجم الزيارات.',
        keyActions: ['ضبط إعدادات التخزين المؤقت (Buffering Hints) لتحقيق التوازن المثالي بين سرعة وصول البيانات وتكلفة التخزين.'],
        imagePath: 'Real-Time SEO Analytics Data Pipeline/Firehose-Streams1.webp',
        figureCaption: 'شكل 1: لوحة المراقبة اللحظية لتدفق بيانات السيو عبر Kinesis Firehose، وتوضح مؤشرات الاستيعاب النشط.'
      },
      {
        name: 'المرحلة الثانية: بناء بحيرة البيانات (Data Lake)',
        tools: 'Amazon S3',
        desc: 'تعمل خدمة Amazon S3 كبنية تخزين مركزية (Data Lake) لهذا النظام. قمت بهيكلة التخزين وتنظيمه لضمان أعلى سرعة في الاسترجاع؛ حيث تُقسَّم البيانات الواردة وتُفهرس تلقائياً حسب التاريخ (السنة / الشهر / اليوم).',
        keyActions: ['تصميم هيكل مجلدات منظم للبيانات الخام (Raw Data) للحفاظ على سلامة البيانات وسهولة تتبعها.'],
        imagePath: 'Real-Time SEO Analytics Data Pipeline/S3-Bucket2.webp',
        figureCaption: 'شكل 2: التقسيم التلقائي للبيانات حسب التاريخ (Year/Month/Day) داخل Amazon S3 لتسريع الاستعلامات وخفض التكلفة.'
      },
      {
        name: 'المرحلة الثالثة: اكتشاف مخطط البيانات والفهرسة التلقائية',
        tools: 'AWS Glue Crawler',
        desc: 'بعد تخزين الملفات الخام في S3، كان لا بد من تحويلها إلى صيغة منظمة قابلة للتحليل. اعتمدت على AWS Glue Crawler لأتمتة هذه الخطوة؛ حيث يقوم الزاحف بفحص حاوية S3 والتعرف تلقائياً على أنواع البيانات والأعمدة (Schema) وإنشاء جدول بيانات وصفية في كتالوج AWS Glue.',
        realValue:
          'بدلاً من تعريف الأعمدة وأنواع البيانات يدوياً، يتولى AWS Glue عملية الاكتشاف بالكامل. بمجرد تشغيل الزاحف، تعرّف النظام على حقول السيو (مثل التوقيت، الدولة، النقرات) وجهزها للتحليل الفوري، مع القدرة على التكيف التلقائي إذا تغيرت بنية البيانات مستقبلاً.',
        keyActions: [
          'تنفيذ دورة فحص ناجحة ربطت ملفات CSV الخام بهيكل جدول علائقي داخل قاعدة بيانات seo_data_pipeline_db.',
          'بناء كتالوج بيانات مركزي (Data Catalog) يحوّل الملفات الخام إلى جداول جاهزة لاستعلامات SQL.'
        ],
        imagePath: 'Real-Time SEO Analytics Data Pipeline/S3-Bucket3.webp',
        figureCaption: 'شكل 3: اكتمال عمل AWS Glue Crawler بنجاح بعد اكتشاف بنية البيانات وتحديث كتالوج الجداول تلقائياً.'
      },
      {
        name: 'المرحلة الرابعة: التحليل الفوري عبر استعلامات SQL بدون خوادم',
        tools: 'Amazon Athena',
        desc: 'مع جاهزية الجداول في كتالوج AWS Glue، استخدمت Amazon Athena لتحليل البيانات باستخدام لغة SQL القياسية مباشرة من بحيرة البيانات في S3 دون الحاجة لإنشاء أو إدارة أي خوادم قواعد بيانات.',
        howDataIsRead:
          'تعتمد آلية العمل على التكامل المباشر مع كتالوج AWS Glue؛ فعند تشغيل استعلام في Athena، يقرأ تعريف الجدول الذي تم بناؤه في المرحلة الثالثة، ويحدد موقع الملفات في S3 وصيغتها (CSV)، ثم يعرضها كجدول منظم. أتاح لي ذلك تحديد قاعدة بيانات seo_final_db وتشغيل الاستعلامات على جدول raw_data فوراً.',
        sqlQueryIntro: 'للتحقق من سلامة تدفق البيانات، قمت بتشغيل الاستعلام التالي لاستعراض السجلات:',
        sqlQuery: 'SELECT * FROM "seo_final_db"."raw_data" limit 10;',
        realValueTitle: 'القيمة الهندسية (السرعة والتكلفة):',
        realValue:
          'تعتمد Athena على نموذج الدفع مقابل كل استعلام (Pay-per-query)، أي أنك تدفع فقط مقابل حجم البيانات التي يتم مسحها فعلياً. وبفضل تقسيم البيانات مسبقاً حسب التاريخ، تصبح الاستعلامات المعقدة فائقة السرعة ومنخفضة التكلفة للغاية.',
        imagePath: 'Real-Time SEO Analytics Data Pipeline/Athena4.webp',
        figureCaption: 'شكل 4: تنفيذ استعلامات SQL مباشرة عبر Amazon Athena على بيانات السيو واستخراج السجلات (الدولة، النقرات، الجهاز) من S3.'
      },
      {
        name: 'المرحلة الخامسة: ذكاء الأعمال ولوحات البيانات التفاعلية',
        tools: 'Amazon QuickSight',
        desc: 'المرحلة النهائية في خط الأنابيب هي التصور البصري للبيانات. قمت بربط Amazon QuickSight مباشرة بمجموعة بيانات Athena لتحويل الأرقام الخام إلى رسوم بيانية ولوحات قيادة تفاعلية سهلة القراءة واتخاذ القرار.',
        howDataIsRead:
          'يتصل QuickSight بخدمة Amazon Athena كمصدر بيانات مباشر، ويقرأ مخطط الجداول من كتالوج Glue وينفذ استعلامات SQL في الخلفية لجلب أحدث البيانات من S3. قمت بضبط الاتصال على وضع الاستعلام المباشر (Direct Query) لضمان انعكاس أي تحديثات جديدة في المخزن على اللوحة فوراً.',
        thePowerOfVisualization:
          'تكمن قوة هذا الربط في المرونة العالية؛ حيث يمكن بناء أي تمثيل بصري — من المخططات الدائرية والأعمدة البيانية إلى الخرائط الحرارية — لتحليل الأداء من كل الزوايا، سواء لتتبع النقرات حسب الدولة، أو توزيع الأجهزة، أو تحديد أوقات ذروة الزيارات بنقرات بسيطة.',
        keyActions: [
          'تصميم لوحة تحكم تفاعلية تمنح أصحاب القرار رؤية شاملة (360 درجة) لأداء السيو وتدعم القرارات المبنية على البيانات اللحظية.'
        ],
        imagePath: 'Real-Time SEO Analytics Data Pipeline/AWS-Quick5.webp',
        figureCaption: ''
      }
    ],
    conclusionContent: (
      <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed pt-2">
        <ul className="list-disc list-inside space-y-3 pr-2 text-zinc-300">
          <li>
            <strong className="text-white">قابلية التوسع التلقائي (Scalability): </strong>
            صُممت البنية لتتوسع ذاتياً؛ سواء كان حجم البيانات 100 سجل أو مليون سجل، تتعامل المكونات السحابية مع الضغط دون أي تدخل بشري.
          </li>
          <li>
            <strong className="text-white">كفاءة التكلفة (FinOps): </strong>
            الاعتماد الكامل على بنية Serverless يضمن الدفع فقط عند معالجة البيانات الفعلية، مما يلغي أي هدر مالي على خوادم تعمل في وضع الخمول.
          </li>
          <li>
            <strong className="text-white">أتمتة كاملة من البداية للنهاية: </strong>
            رحلة البيانات بأكملها — من لحظة نقر الزائر على الموقع وحتى ظهورها كمؤشر بصري على لوحة القيادة — مؤتمتة بالكامل.
          </li>
          <li>
            <strong className="text-white">تطبيق أفضل ممارسات السحابة: </strong>
            تطبيق معايير الصناعة مثل تقسيم البيانات زمنياً في S3 والاكتشاف التلقائي للمخططات عبر Glue، مما يضمن بقاء بحيرة البيانات منظمة وعالية الأداء.
          </li>
        </ul>
      </div>
    ),
    coverImage: 'Real-Time SEO Analytics Data Pipeline/AWS-Quick5.webp'
  },
  {
    id: 'zero-touch-pipeline',
    tag: 'هندسة قائمة على الأحداث (Event-Driven)',
    title: 'بنية AWS السحابية: خط أنابيب المزامنة التلقائية (Zero-Touch Pipeline)',
    subtitle: 'مزامنة لحظية بين بيئة العمل المحلية وقواعد بيانات السحابة للروابط الخلفية (Backlinks)',
    techStack: ['AWS Aurora RDS', 'DynamoDB', 'AWS Lambda', 'Python (Boto3)', 'Watchdog', 'Streamlit', 'GitHub Webhooks', 'VS Code'],
    summary:
      'نموذج عملي لهندسة السحابة بدون خوادم والأتمتة القائمة على الأحداث. يربط هذا المشروع بيئة العمل المحلية بقواعد بيانات AWS السحابية في الوقت الفعلي؛ فبمجرد حفظ أي تعديل على ملف البيانات محلياً، ينطلق النظام تلقائياً لمعالجة البيانات وتحديث لوحة التحكم الحية دون أي تدخل يدوي.',
    detailedOverview:
      'يركز هذا المشروع على بناء خط أنابيب بيانات سحابي مؤتمت بالكامل على AWS (Zero-Maintenance Architecture)، يضمن المزامنة الفورية والسلسة بين الملفات المحلية وقواعد البيانات السحابية بمجرد حفظ التغييرات.',
    whyAws:
      'تؤدي المتابعة اليدوية للروابط الخلفية (Backlinks) عبر منصات متعددة إلى تأخر اكتشاف الروابط المعطلة أو التغييرات المهمة. بربط AWS Lambda و DynamoDB و Aurora RDS مع مراقب أحداث بايثون محلي، تتزامن سجلات التدقيق فوراً مع لوحة تحكم ويب حية بمجرد حفظ الملف.',
    phases: [
      {
        name: 'المرحلة الأولى: ربط وتكامل قواعد البيانات السحابية',
        tools: 'AWS Aurora RDS (PostgreSQL/MariaDB) & Boto3 (Python SDK)',
        desc: 'الخطوة الأولى والأكثر أهمية كانت تأسيس مصدر بيانات مركزي آمن وموثوق على السحابة. قمت بإنشاء نسخة قاعدة بيانات مدارة عبر Amazon RDS، وربطت تطبيق البايثون بها عبر مكتبة Boto3 الرسمية للتواصل مع خدمات AWS.',
        detailedStepsTitle: 'الخطوات التقنية التفصيلية:',
        detailedSteps: [
          {
            title: 'تجهيز قاعدة البيانات (Database Provisioning)',
            desc: 'إطلاق قاعدة بيانات مدارة على AWS RDS لضمان التوافر العالي والتخزين الآمن لمجموعات البيانات.'
          },
          {
            title: 'تكامل حزمة التطوير (SDK Integration)',
            desc: 'تثبيت وتهيئة مكتبة boto3 لربط كود البايثون المحلي بالبنية التحتية السحابية في AWS.'
          },
          {
            title: 'ضبط نقطة الاتصال (Endpoint Configuration)',
            desc: 'استخراج عنوان الاتصال الفريد (Database Endpoint) من لوحة تحكم RDS.',
            subPoints: [
              'يعمل هذا العنوان كبوابة رقمية تتيح للتطبيق الوصول الآمن والمباشر إلى قاعدة البيانات السحابية.'
            ]
          },
          {
            title: 'الأمان وصلاحيات الوصول (IAM Roles)',
            desc: 'إعداد دور صلاحيات مخصص (IAM Role) بالأذونات اللازمة فقط.',
            subPoints: [
              'تضمن هذه الخطوة مصادقة التطبيق للوصول إلى موارد RDS دون كشف أي بيانات اعتماد حساسة داخل الكود.'
            ]
          }
        ],
        realValueTitle: 'القيمة الهندسية (التطوير السحابي الأصيل):',
        realValue:
          'ربط الواجهة الخلفية للبايثون مباشرة بقاعدة بيانات سحابية مدارة (RDS) يحرر النظام من قيود التخزين المحلي، ويجعله قابلاً للتوسع والوصول من أي مكان في العالم بأعلى مستويات الأمان والأداء.',
        imagePath: [
          'AWS Serverless Architecture The Zero-Touch Data Pipeline/RDS1.webp',
          'AWS Serverless Architecture The Zero-Touch Data Pipeline/RDS11.webp'
        ],
        figureCaption: [
          'شكل 1: تهيئة قاعدة بيانات Amazon RDS وتفعيل مصادقة IAM لتعزيز الأمان والتحكم في الوصول.',
          'شكل 2: تحديد نقاط الاتصال (Endpoints) وإعدادات المنفذ (5432) لربط تطبيق البايثون بقاعدة البيانات السحابية.'
        ]
      },
      {
        name: 'المرحلة الثانية: إعداد طبقة التخزين فائقة السرعة (NoSQL)',
        tools: 'Amazon DynamoDB',
        desc: 'لدعم التحديث اللحظي للوحة التحكم، اعتمدت على قاعدة بيانات Amazon DynamoDB كطبقة تخزين NoSQL، وذلك لقدرتها الفائقة على معالجة عمليات القراءة والكتابة المتكررة بزمن استجابة يقاس بأجزاء من المللي ثانية.',
        keyActions: [
          'تصميم الجدول (Table Schema): إنشاء جدول باسم Backlinks مخصص لتخزين مؤشرات السيو لكل رابط.',
          'ميزة الأداء: على عكس قواعد البيانات التقليدية، تتوسع DynamoDB تلقائياً وفورياً مع حجم الطلبات، مما يجعلها العمود الفقري المثالي لأدوات المراقبة اللحظية.'
        ],
        imagePath: [
          'AWS Serverless Architecture The Zero-Touch Data Pipeline/Dynamodp-2.webp',
          'AWS Serverless Architecture The Zero-Touch Data Pipeline/dynamodp-22.webp'
        ],
        figureCaption: [
          'شكل 3: نظرة عامة على إعدادات جدول Backlinks في Amazon DynamoDB ومفتاح التقسيم (Partition Key).',
          'شكل 4: التحقق من نجاح ترحيل البيانات واستعراض السجلات داخل DynamoDB للتأكد من دقة الحقول.'
        ]
      },
      {
        name: 'المرحلة الثالثة: أتمتة استيعاب البيانات (سكربت Python ETL)',
        tools: 'Python (Boto3, Watchdog, Pandas), CSV Dataset',
        desc: 'في هذه المرحلة، طورت سكربت ETL مخصص بلغة بايثون لسد الفجوة بين البيانات المحلية والسحابة؛ بحيث يكتشف أي تحديثات جديدة ويرفعها تلقائياً إلى Amazon DynamoDB مع منع تكرار السجلات.',
        content: (
          <div className="space-y-6 text-xs md:text-sm text-zinc-300 leading-relaxed">
            <div>
              <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                الإجراءات التقنية الرئيسية:
              </h4>
              <ul className="list-disc list-inside space-y-2 pr-2 text-zinc-300">
                <li>
                  <strong className="text-white">استخراج البيانات (Data Extraction): </strong>
                  يقرأ السكربت مؤشرات السيو الخام (مثل DA, DR, Traffic) مباشرة من ملف البيانات المحلي.
                </li>
                <li>
                  <strong className="text-white">مطابقة المخطط (Schema Mapping): </strong>
                  يحوّل أعمدة ملف CSV ديناميكياً إلى بنية بيانات متوافقة مع جداول NoSQL في DynamoDB.
                </li>
                <li>
                  <strong className="text-white">الرفع الذكي ومنع التكرار: </strong>
                  باستخدام مكتبة <strong className="text-white">Boto3 SDK</strong>، يفحص السكربت آخر معرّف مسجل وينفذ عمليات{' '}
                  <code dir="ltr" className="text-amber-400 bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-xs">PutItem</code>{' '}
                  للروابط الجديدة فقط.
                </li>
                <li>
                  <strong className="text-white">منطق الأتمتة (Save-to-Update): </strong>
                  يمثل هذا السكربت المحرك الأساسي لمزامنة البيانات دون الحاجة لفتح لوحة تحكم AWS يدوياً.
                </li>
              </ul>
            </div>

            {/* بلوك الكود */}
            <div dir="ltr" className="rounded-xl border border-zinc-800 bg-[#0d1117] p-4 overflow-hidden shadow-lg text-left">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80 font-mono text-xs text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  Cloud-based SEO Dashboard.py
                </span>
                <span className="text-zinc-500 text-[11px]">Python 3.x</span>
              </div>

              <pre className="font-mono text-[11px] md:text-xs leading-relaxed text-zinc-200 overflow-x-auto scrollbar-thin max-h-[380px]">
                <code>{`import boto3
import pandas as pd
from decimal import Decimal

# 1. Connect to AWS
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('Backlinks')

# 2. Read the file
df = pd.read_csv('backlinks.csv')
df = df.fillna('')

print(f"Discovery: {len(df)} links found. Starting upload...")

# Get last registered ID to avoid duplicates
response = table.scan(ProjectionExpression='LinkID')
items = response.get('Items', [])
last_aws_id = max([int(i['LinkID']) for i in items]) if items else 0

# 3. Auto Upload Loop
for index, row in df.iterrows():
    current_id = index + 1
    if current_id <= last_aws_id:
        continue

    item = {
        'LinkID': current_id,
        'URL': str(row['Website URL']),
        'DR': Decimal(str(row['DR (Ahrefs)'] or 0)),
        'DA': Decimal(str(row['DA (Mangools)'] or 0)),
        'Traffic': str(row['Organic Traffic']),
        'SpamScore': str(row['Spam Score (%)']),
        'Status': str(row['Status']),
        'Country': str(row['Country'])
    }
    table.put_item(Item=item)`}</code>
              </pre>
            </div>

            {/* الصورة تحت الكود */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3">
              <div className="rounded-lg overflow-hidden border border-zinc-900 bg-black/50">
                <img
                  src="/AWS Serverless Architecture The Zero-Touch Data Pipeline/Automated-Data-Ingestion3.webp"
                  alt="سكربت Python ETL داخل VS Code"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto rounded-md"
                />
              </div>
              <p className="mt-2.5 text-center text-xs text-zinc-400">
                شكل 5: تنفيذ سكربت Python ETL داخل VS Code لمعالجة البيانات ومنع التكرار تلقائياً باستخدام Boto3.
              </p>
            </div>
          </div>
        )
      },
      {
        name: 'المرحلة الرابعة: الواجهة الخلفية السحابية عبر AWS Lambda',
        tools: 'AWS Lambda (Python Runtime)',
        desc: 'بناء دوال مصغرة قائمة على الأحداث (Event-Driven Microservices) لمعالجة البيانات الواردة، والتحقق من حالة الروابط، وتزويد لوحة التحكم بالبيانات بأمان وسرعة.',
        content: (
          <div className="space-y-6 text-xs md:text-sm text-zinc-300 leading-relaxed">
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-bold text-sm mb-1">كيف تربط دالة Lambda أجزاء النظام ببعضها؟</h4>
                <p className="text-zinc-400">
                  تعمل دالة Lambda كـ <strong className="text-white">حلقة وصل ذكية</strong> بين مخزن البيانات والتطبيق النهائي؛ حيث تم ربطها بـ{' '}
                  <strong className="text-[#ff2e7e]">DynamoDB Stream Trigger</strong> لتستجيب لأي تغيير لحظة حدوثه.
                </p>
              </div>

              <div>
                <h5 className="text-amber-400 font-semibold mb-2">مسار العمل المؤتمت:</h5>
                <ol className="list-decimal list-inside space-y-1.5 pr-2 text-zinc-300">
                  <li>
                    <strong className="text-white">الحدث المُشغّل (Trigger): </strong>
                    بمجرد حفظ رابط جديد في DynamoDB، يتم إطلاق حدث إدخال فوري.
                  </li>
                  <li>
                    <strong className="text-white">التنفيذ اللحظي (Execution): </strong>
                    تلتقط AWS Lambda الحدث فوراً وتبدأ في معالجة البيانات والتحقق من حالة الرابط.
                  </li>
                  <li>
                    <strong className="text-white">النتيجة الفورية: </strong>
                    يتم تحديث البيانات وعرضها مباشرة على لوحة تحكم <strong className="text-white">Streamlit</strong>.
                  </li>
                </ol>
              </div>

              <div>
                <h5 className="text-emerald-400 font-semibold mb-2">لماذا اعتمدت على AWS Lambda هنا؟</h5>
                <ol className="list-decimal list-inside space-y-1.5 pr-2 text-zinc-300">
                  <li>
                    <strong className="text-white">التشغيل عند الطلب فقط: </strong>
                    يعمل الكود فقط عند طلب البيانات، فلا توجد تكلفة لخوادم تعمل دون استخدام.
                  </li>
                  <li>
                    <strong className="text-white">صفر صيانة للبنية التحتية: </strong>
                    تتولى AWS إدارة الخوادم والتوسع التلقائي بالكامل.
                  </li>
                  <li>
                    <strong className="text-white">عزل وحماية البيانات: </strong>
                    تعمل Lambda كطبقة وسيطة تحمي مفاتيح قاعدة البيانات وتفصلها تماماً عن واجهة المستخدم.
                  </li>
                </ol>
              </div>

              <div>
                <h5 className="text-white font-bold mb-2">الصلاحيات وأدوار الأمان (IAM Roles):</h5>
                <ul className="list-disc list-inside space-y-1 pr-2 text-zinc-300">
                  <li>
                    قمت بربط دور صلاحيات مخصص بدالة Lambda ومنحها سياسة{' '}
                    <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-xs">
                      AmazonDynamoDBReadOnlyAccess
                    </code>{' '}
                    للسماح لها بقراءة البيانات من جدول{' '}
                    <code dir="ltr" className="text-amber-400 bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-xs">
                      Backlinks
                    </code>{' '}
                    وفق مبدأ الحد الأدنى من الصلاحيات.
                  </li>
                </ul>
              </div>
            </div>

            {/* الصورة الأولى */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3">
              <div className="rounded-lg overflow-hidden border border-zinc-900 bg-black/50">
                <img
                  src="/AWS Serverless Architecture The Zero-Touch Data Pipeline/lambda4.webp"
                  alt="واجهة دالة AWS Lambda في كونسول AWS"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto rounded-md"
                />
              </div>
              <p className="mt-2.5 text-center text-xs text-zinc-400">
                شكل 6: دالة AWS Lambda المكتوبة بلغة بايثون وتعمل كواجهة برمجية (Serverless API) لاسترجاع مؤشرات السيو من DynamoDB.
              </p>
            </div>

            {/* بلوك الكود */}
            <div dir="ltr" className="rounded-xl border border-zinc-800 bg-[#0d1117] p-4 overflow-hidden shadow-lg text-left">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80 font-mono text-xs text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  lambda_function.py
                </span>
                <span className="text-zinc-500 text-[11px]">Python 3.x</span>
              </div>

              <pre className="font-mono text-[11px] md:text-xs leading-relaxed text-zinc-200 overflow-x-auto scrollbar-thin max-h-[420px]">
                <code>{`import boto3
import json
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Backlinks')

def decimal_default(obj):
    if isinstance(obj, Decimal):
        return int(obj) if obj % 1 == 0 else float(obj)
    raise TypeError

def lambda_handler(event, context):
    try:
        response = table.scan()
        items = response.get('Items', [])
        
        while 'LastEvaluatedKey' in response:
            response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
            items.extend(response.get('Items', []))
            
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps(items, default=decimal_default)
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }`}</code>
              </pre>
            </div>

            {/* الصورة الثانية */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3">
              <div className="rounded-lg overflow-hidden border border-zinc-900 bg-black/50">
                <img
                  src="/AWS Serverless Architecture The Zero-Touch Data Pipeline/lambda44.webp"
                  alt="إعدادات وصلاحيات IAM Role"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto rounded-md"
                />
              </div>
              <p className="mt-2.5 text-center text-xs text-zinc-400">
                شكل 7: تهيئة أدوار وصلاحيات IAM لتخويل دالة Lambda بالوصول الآمن إلى موارد DynamoDB.
              </p>
            </div>
          </div>
        )
      },
      {
        name: 'المرحلة الخامسة: المراقبة والأتمتة المحلية عبر Python Watchdog',
        tools: 'Python, Watchdog Library & Subprocess',
        desc: 'لضمان تحديث لوحة التحكم تلقائياً دون تدخل يدوي، طورت سكربت مراقبة (auto_uploader.py) يعمل كـ "حارس ملفات" يراقب ملف البيانات المحلي لحظياً.',
        content: (
          <div className="space-y-6 text-xs md:text-sm text-zinc-300 leading-relaxed">
            <div>
              <h4 className="text-white font-bold text-sm mb-2">آلية العمل:</h4>
              <ul className="list-disc list-inside space-y-2 pr-2 text-zinc-300">
                <li>
                  <strong className="text-white">المراقبة اللحظية: </strong>
                  باستخدام مكتبة{' '}
                  <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    watchdog
                  </code>{' '}
                  يراقب السكربت أي تعديل يطرأ على ملف{' '}
                  <code dir="ltr" className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    backlinks.csv
                  </code>.
                </li>
                <li>
                  <strong className="text-white">التنفيذ التلقائي: </strong>
                  بمجرد الضغط على حفظ (Save) في الملف، يستدعي السكربت وحدة الرفع الرئيسية ({' '}
                  <code dir="ltr" className="text-emerald-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    Cloud-based SEO Dashboard.py
                  </code>{' '}
                  ) عبر{' '}
                  <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    subprocess
                  </code>.
                </li>
                <li>
                  <strong className="text-white">القيمة العملية: </strong>
                  إلغاء الحاجة لرفع الملفات يدوياً، وضمان انعكاس أي رابط جديد يضاف محلياً على سحابة AWS ولوحة Streamlit خلال ثوانٍ.
                </li>
              </ul>
            </div>

            {/* بلوك الكود */}
            <div dir="ltr" className="rounded-xl border border-zinc-800 bg-[#0d1117] p-4 overflow-hidden shadow-lg text-left">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80 font-mono text-xs text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  auto_uploader.py
                </span>
                <span className="text-zinc-500 text-[11px]">Python 3.x</span>
              </div>

              <pre className="font-mono text-[11px] md:text-xs leading-relaxed text-zinc-200 overflow-x-auto scrollbar-thin max-h-[380px]">
                <code>{`import time
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

FILE_TO_WATCH = "backlinks.csv" 
UPLOAD_SCRIPT = "Cloud-based SEO Dashboard.py"

class MyHandler(FileSystemEventHandler):
    def on_modified(self, event):
        print(f"File modified: {event.src_path}")
        
        if event.src_path.endswith(FILE_TO_WATCH):
            print(f"🚀 Detected change in {FILE_TO_WATCH}... Uploading to AWS!")
            subprocess.run(["python", UPLOAD_SCRIPT])
            print("✅ Done! Changes uploaded to AWS.")

if __name__ == "__main__":
    event_handler = MyHandler()
    observer = Observer()
    observer.schedule(event_handler, path='.', recursive=False)
    observer.start()
    print(f"👀 Watcher is active! Waiting for saves on {FILE_TO_WATCH}...")
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()`}</code>
              </pre>
            </div>

            {/* الصورة تحت الكود */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3">
              <div className="rounded-lg overflow-hidden border border-zinc-900 bg-black/50">
                <img
                  src="/AWS Serverless Architecture The Zero-Touch Data Pipeline/CODE_5.webp"
                  alt="سكربت مراقبة الملفات Python Watchdog"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto rounded-md"
                />
              </div>
              <p className="mt-2.5 text-center text-xs text-zinc-400">
                شكل 8: تشغيل مراقب الملفات (File Watcher) بلغة بايثون لأتمتة رفع البيانات فور تعديل الملف المحلي.
              </p>
            </div>
          </div>
        )
      },
      {
        name: 'المرحلة السادسة: تجهيز المشروع للنشر السحابي',
        tools: 'GitHub & Python & Requirements file',
        content: (
          <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed">
            <div>
              <h4 className="text-white font-bold text-sm mb-1">الانتقال من البيئة المحلية إلى السحابة:</h4>
              <p>
                بعد اكتمال الكود على جهازي، قمت برفع المشروع بالكامل إلى <strong className="text-white">GitHub</strong> مع تنظيف المسارات والتأكد من عدم اعتماده على أي مجلدات محلية، ليكون جاهزاً للعمل على أي خادم سحابي بكفاءة.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-1">ملف الاعتماديات (requirements.txt):</h4>
              <p>
                أنشأت ملف{' '}
                <code dir="ltr" className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                  requirements.txt
                </code>{' '}
                ليعمل كدليل تشغيل للخادم السحابي؛ حيث يحدد المكتبات المطلوبة مثل{' '}
                <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                  streamlit
                </code>{' '}
                و{' '}
                <code dir="ltr" className="text-emerald-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                  pandas
                </code>{' '}
                ليتم تثبيتها تلقائياً بمجرد النشر.
              </p>
            </div>
          </div>
        ),
        imagePath: [
          'AWS Serverless Architecture The Zero-Touch Data Pipeline/GITHUB6.webp',
          'AWS Serverless Architecture The Zero-Touch Data Pipeline/GITHUB-66.webp'
        ],
        figureCaption: [
          'شكل 9: مستودع GitHub الذي يضم النسخة النهائية الجاهزة للنشر السحابي.',
          'شكل 10: قائمة حزم البايثون في ملف requirements.txt لتجهيز بيئة التشغيل تلقائياً.'
        ]
      },
      {
        name: 'المرحلة السابعة: إطلاق لوحة التحكم الحية والأتمتة الكاملة',
        tools: 'Streamlit Cloud, GitHub & Automation Script',
        content: (
          <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed">
            <div>
              <h4 className="text-white font-bold text-sm mb-1">إطلاق التطبيق على الإنترنت:</h4>
              <p>
                ربطت مستودع <strong className="text-white">GitHub</strong> بمنصة <strong className="text-white">Streamlit Cloud</strong> وحددت الملف الرئيسي{' '}
                <code dir="ltr" className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                  my_seo_dashboard.py
                </code>
                ، لتصبح لوحة البيانات متاحة عبر رابط مباشر ومرتبطة لحظياً بقاعدة البيانات السحابية.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-bold text-sm mb-1">سلاسة التشغيل اليومي:</h4>
              <p>
                بعد اكتمال الربط، لم تعد هناك حاجة لفتح محرر الأكواد أو لوحة AWS لتحديث البيانات:
              </p>
              <ul className="list-disc list-inside space-y-2 pr-2">
                <li>
                  <strong className="text-white">الخطوة الوحيدة: </strong>
                  فتح ملف{' '}
                  <code dir="ltr" className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    backlinks.csv
                  </code>{' '}
                  محلياً، إضافة الرابط الجديد، والضغط على حفظ.
                </li>
                <li>
                  <strong className="text-white">النتيجة الفورية: </strong>
                  يلتقط سكربت المراقبة التعديل، يفحص حالة الرابط، ويرفعه إلى سحابة AWS لتتحدث لوحة التحكم الحية خلال ثوانٍ معدودة.
                </li>
              </ul>
            </div>
          </div>
        ),
        realValue:
          'يوفر هذا النظام تجربة إدارة سلسة للغاية؛ حيث يمكن تحديث محفظة الروابط الخلفية بالكامل بمجرد تعديل جدول بيانات بسيط، بينما تتولى البنية السحابية في AWS وتطبيق Streamlit كل العمليات المعقدة في الخلفية.',
        imagePath: [
          'AWS Serverless Architecture The Zero-Touch Data Pipeline/streamlit-7.webp',
          'AWS Serverless Architecture The Zero-Touch Data Pipeline/STREAMLIT8.webp'
        ],
        figureCaption: [
          'شكل 11: ربط مستودع GitHub بمنصة Streamlit Cloud لنشر تطبيق الويب التفاعلي.',
          'شكل 12: التشغيل الحي للوحة البيانات بعد مزامنتها بالكامل مع GitHub وقاعدة بيانات AWS.'
        ]
      }
    ],
    conclusionContent: (
      <div className="space-y-6 text-xs md:text-sm text-zinc-300 leading-relaxed pt-2">
        <div>
          <h4 className="text-sm font-semibold text-emerald-400 mb-2">
            دورة عمل "احفظ ليتم التحديث" (Save-to-Update Workflow):
          </h4>
          <p className="mb-3">
            تكمن القيمة الحقيقية في هذا النظام في <strong className="text-white">الأتمتة الصامتة بدون تدخل بشري</strong>، مما يحوّل مهمة يدوية متكررة إلى عملية سحابية متكاملة:
          </p>
          <ul className="list-disc list-inside space-y-2.5 pr-2 text-zinc-300">
            <li>
              <strong className="text-white">تحديث بضغطة حفظ: </strong>
              بمجرد تعديل ملف{' '}
              <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                backlinks.csv
              </code>{' '}
              والضغط على <strong className="text-white">Save</strong>، يلتقط السكربت التغيير فوراً.
            </li>
            <li>
              <strong className="text-white">فحص ورفع لحظي للسحابة: </strong>
              يتحقق النظام من حالة كل رابط (200 OK أو معطل) ويرفع البيانات المحدثة مباشرة إلى <strong className="text-white">AWS Cloud</strong>.
            </li>
            <li>
              <strong className="text-white">مزامنة فورية للوحة التحكم: </strong>
              تنعكس التعديلات مباشرة على لوحة البيانات الحية لضمان توفر أحدث مؤشرات السيو أمام فريق العمل.
            </li>
          </ul>
        </div>

        <div className="pt-2 border-t border-zinc-800/60">
          <h4 className="text-sm font-semibold text-amber-400 mb-2">
            استكشف التجربة الحية:
          </h4>
          <p className="text-zinc-300 mb-3">
            يمكنك تصفح النسخة التفاعلية المباشرة للوحة البيانات ومشاهدة نتائج هذه الأتمتة من هنا:
          </p>
          <a
            href="https://your-live-demo-url-here.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-amber-300 hover:text-amber-200 text-xs transition-colors"
          >
            <span>👈</span>
            <span className="underline underline-offset-4">لوحة تحكم الروابط الخلفية الحية (Live Dashboard)</span>
          </a>
        </div>
      </div>
    ),
    coverImage: 'AWS Serverless Architecture The Zero-Touch Data Pipeline/STREAMLIT8.webp'
  },
  {
    id: 'conversational-agent',
    tag: 'الذكاء الاصطناعي وفهم اللغة العربية (Arabic NLU)',
    title: 'مساعد الحجوزات الذكي عبر واتساب (AI Conversational Agent)',
    subtitle: 'نظام حجز آلي متكامل باللهجة الإماراتية والعربية عبر Amazon Lex و Twilio',
    techStack: ['Amazon Lex', 'AWS Lambda', 'Twilio WhatsApp API', 'AWS Budgets', 'Python'],
    summary:
      'مساعد محادثة ذكي مدعوم بالذكاء الاصطناعي صُمم لأتمتة استفسارات العملاء وحجوزات الخيام بالكامل عبر واتساب. بدمج Amazon Lex مع Twilio و AWS Lambda، يفهم النظام اللغة العربية واللهجة الإماراتية، ويجمع تفاصيل الحجز ويرسل تنبيهات فورية للإدارة ضمن بنية سحابية صفرية التكلفة (Zero-Spend Architecture).',
    detailedOverview:
      'يستعرض هذا المشروع بناء ونشر روبوت محادثة سحابي (Serverless AI Chatbot) لأتمتة طلبات الحجز لشركة (بيت النوخذة). بالاعتماد على تقنيات فهم اللغة الطبيعية (NLU)، يتفاعل النظام مع العملاء عبر واتساب لجمع كافة تفاصيل الطلب (نوع الخيمة، المقاس، والإمارة) دون أي تدخل بشري، مع الحفاظ على أعلى درجات الكفاءة والتوفير.',
    whyAws:
      'تتطلب استفسارات الفعاليات والمشاريع التجارية في الخليج استجابة فورية على مدار الساعة. توفر خدمة Amazon Lex محركاً متقدماً لفهم اللغة العربية واللهجة الإماراتية، بينما تتولى دوال AWS Lambda التحقق من البيانات وتنفيذ الطلبات وإرسال التنبيهات دون الحاجة لخوادم دائمة.',
    phases: [
      {
        name: 'المرحلة الأولى: الضوابط المالية وأمان البنية السحابية',
        tools: 'AWS Budgets',
        desc: 'الخطوة الأولى قبل بناء أي خدمة ذكاء اصطناعي كانت تأمين بيئة العمل مالياً؛ حيث وضعت ضوابط صارمة لإدارة التكاليف وضمان بقاء المشروع بالكامل ضمن حدود الباقة المجانية (Free Tier).',
        detailedStepsTitle: 'الخطوات التقنية التفصيلية:',
        detailedSteps: [
          {
            title: 'إنشاء ميزانية صفرية (My Zero-Spend Budget)',
            desc: 'تصميم نظام مراقبة مخصص لمنع أي استهلاك سحابي غير مقصود.'
          },
          {
            title: 'ضبط عتبة التنبيه (Threshold Configuration)',
            desc: 'تحديد حد أقصى صارم بقيمة 1.00 دولار لتجربة خدمات الذكاء الاصطناعي المتقدمة دون أي مخاطرة مالية.'
          },
          {
            title: 'رصد الانحرافات والتنبيه الفوري',
            desc: 'تهيئة النظام لمراقبة الاستهلاك لحظياً وإرسال تنبيهات فورية في حال اقتراب الاستهلاك المتوقع من الحد المسموح.'
          }
        ],
        imagePath: 'AI Conversational Agent Automated Booking Solution (Arabic Project)/1.webp',
        figureCaption: 'شكل 1: إعداد ميزانية AWS Budgets بعتبة إنفاق صفرية لضمان التحكم المالي الكامل أثناء التطوير.'
      },
      {
        name: 'المرحلة الثانية: تهيئة البنية التحتية لمحرك الذكاء الاصطناعي',
        tools: 'Amazon Lex (V2)',
        desc: 'بعد تأمين الضوابط المالية، انتقلت إلى بناء نواة المحادثة عبر إطلاق محرك Amazon Lex V2، الذي يمثل "العقل المدبر" القادر على استيعاب اللغة الطبيعية وإدارة مسارات الحوار المعقدة.',
        detailedStepsTitle: 'التفاصيل التقنية الرئيسية:',
        detailedSteps: [
          {
            title: 'إطلاق نسخة البوت (Bot Instance Deployment)',
            desc: 'تهيئة المساعد الذكي على منصة Lex V2 للاستفادة من قدراتها المتقدمة في فهم اللغة الطبيعية (NLU).'
          },
          {
            title: 'التخصيص اللغوي المحلي',
            desc: 'إعداد البوت باسم "BaitAlNokhada_Helper" وتوجيهه لخدمة العملاء باللغة العربية بما يتناسب مع طبيعة السوق المحلي.'
          },
          {
            title: 'التحقق من الجاهزية',
            desc: 'التأكد من وصول حالة البوت إلى (Available)، مما يؤكد جاهزية الموارد السحابية للانتقال إلى مرحلة بناء الحوارات.'
          }
        ],
        imagePath: [
          'AI Conversational Agent Automated Booking Solution (Arabic Project)/2.webp',
          'AI Conversational Agent Automated Booking Solution (Arabic Project)/22.webp'
        ],
        figureCaption: [
          'شكل 2: لوحة تحكم Amazon Lex V2 أثناء تهيئة المساعد الذكي.',
          'شكل 3: تفعيل نسخة البوت والتحقق من حالتها (Available) تمهيداً لتدريب نماذج اللغة.'
        ]
      },
      {
        name: 'المرحلة الثالثة: هندسة المقاصد (Intents) وتوطين اللغة',
        tools: 'Amazon Lex (V2) - دعم العربية (الإمارات)',
        desc: 'في هذه المرحلة، صممت هيكل التفاعل عبر تعريف المقاصد (Intents) لتصنيف أهداف المستخدم بدقة، مع اختيار نموذج اللغة العربية (الإمارات) لتمكين البوت من فهم الصياغات المحلية والخليجية بسلاسة.',
        detailedStepsTitle: 'الخطوات التقنية التفصيلية:',
        detailedSteps: [
          {
            title: 'تصنيف مقاصد الحوار (Intent Categorization)',
            desc: 'بناء المقاصد الأساسية بدءاً من الترحيب (GreetingIntent) وحتى المقصد الرئيسي للخدمة وهو طلب حجز خيمة (OrderTent).'
          },
          {
            title: 'معالجة اللهجة المحلية (Arabic UAE)',
            desc: 'اعتماد نموذج اللغة العربية المخصص للإمارات لتمكين البوت من استيعاب المصطلحات الشائعة لدى العملاء في المنطقة.'
          },
          {
            title: 'بناء واختبار النموذج',
            desc: 'تشغيل عملية البناء (Build) بنجاح للتحقق من سلامة هيكل المقاصد قبل البدء في تغذيته بعبارات التدريب.'
          }
        ],
        imagePath: 'AI Conversational Agent Automated Booking Solution (Arabic Project)/3(1).webp',
        figureCaption: 'شكل 4: بناء هيكل المقاصد (Intents) داخل بيئة اللغة العربية (الإمارات) لتصنيف طلبات العملاء بدقة.'
      },
      {
        name: 'المرحلة الرابعة: هندسة العبارات التدريبية وضبط دقة الفهم',
        tools: 'Natural Language Understanding (NLU) - Sample Utterances',
        desc: 'لضمان تعرف البوت على طلبات العملاء مهما اختلفت صياغتها، طبقت هندسة العبارات التدريبية (Utterance Engineering) عبر تزويد النموذج بصياغات متنوعة وضبط حساسية محرك الفهم.',
        detailedStepsTitle: 'التفاصيل التقنية الرئيسية:',
        detailedSteps: [
          {
            title: 'صياغة عبارات التدريب (Sample Utterances)',
            desc: 'إعداد 13 عبارة تدريبية متنوعة باللغة العربية، تتراوح بين الطلبات المباشرة مثل "أريد خيمة" والعبارات المركبة التي تتضمن متغيرات مثل {TentType} و {TentSize}.'
          },
          {
            title: 'ضبط عتبة الثقة (Confidence Threshold)',
            desc: 'ضبط حساسية المحرك عند 40% لتمكينه من استنتاج نية العميل بذكاء حتى لو لم تتطابق جملته حرفياً مع العبارات التدريبية (مثل فهم كلمة "أسعار" كبداية لطلب حجز أو استفسار).'
          },
          {
            title: 'دمج المتغيرات السياقية',
            desc: 'ربط المتغيرات (Slots) داخل العبارات التدريبية لالتقاط نوع الخيمة أو مقاسها مباشرة من الرسالة الأولى للعميل دون تكرار الأسئلة.'
          }
        ],
        imagePath: [
          'AI Conversational Agent Automated Booking Solution (Arabic Project)/4.webp',
          'AI Conversational Agent Automated Booking Solution (Arabic Project)/44.webp'
        ],
        figureCaption: [
          'شكل 5: تصميم مقصد OrderTent وبدء مرحلة تدريب نموذج فهم اللغة الطبيعية.',
          'شكل 6: هندسة 13 عبارة تدريبية مدمجة بالمتغيرات لالتقاط تفاصيل الحجز من رسالة العميل الأولى.'
        ]
      },
      {
        name: 'المرحلة الخامسة: هندسة جمع البيانات التفاعلية (Multi-Turn Slots)',
        tools: 'Amazon Lex (V2) - Custom & Built-in Slot Types',
        desc: 'صممت نظام الحقول الذكية (Slots) ليعمل كمحرك جمع البيانات داخل المحادثة؛ بحيث يدير حواراً متسلسلاً مع العميل لاستيفاء كافة المعلومات المطلوبة لإتمام طلب الحجز بدقة.',
        content: (
          <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed">
            <div>
              <h4 className="text-sm mb-2 font-semibold text-emerald-400">
                الخطوات التقنية التفصيلية:
              </h4>
              <ul className="list-disc list-inside space-y-3 pr-2 text-zinc-300">
                <li>
                  <strong className="text-white">إنشاء أنواع بيانات مخصصة ( </strong>
                  <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    TentType
                  </code>
                  <strong className="text-white"> ): </strong>
                  أنشأت نوع بيانات مخصصاً باسم{' '}
                  <code dir="ltr" className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    Tent_Kinds
                  </code>{' '}
                  لتصنيف أنواع الخيام المتوفرة (مثل: خيام أعراس، فعاليات، ملكية) لضمان دقة الاختيارات.
                </li>

                <li className="space-y-2">
                  <div>
                    <strong className="text-white">استخلاص البيانات القياسية (Built-in Entities): </strong>
                    استخدام أنواع البيانات المدمجة في Amazon Lex لالتقاط المعلومات بدقة عالية:
                  </div>
                  <ul className="pr-6 space-y-1.5 list-disc list-inside text-zinc-400">
                    <li>
                      <code dir="ltr" className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                        TentSize
                      </code>
                      {' '}باستخدام{' '}
                      <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                        AMAZON.AlphaNumeric
                      </code>{' '}
                      لالتقاط المقاسات والأبعاد.
                    </li>
                    <li>
                      <code dir="ltr" className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                        Location
                      </code>
                      {' '}باستخدام{' '}
                      <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                        AMAZON.City
                      </code>{' '}
                      لتحديد الإمارة أو المدينة.
                    </li>
                    <li>
                      <code dir="ltr" className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                        PhoneNumber
                      </code>
                      {' '}باستخدام{' '}
                      <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                        AMAZON.PhoneNumber
                      </code>{' '}
                      للتحقق من صحة رقم الهاتف للتواصل.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-white">صياغة أسئلة طبيعية وودودة: </strong>
                  إعداد أسئلة عربية طبيعية لكل حقل (مثل: "في أي إمارة محتاج الخيمة؟") لتوجيه العميل بسلاسة خلال خطوات الحجز.
                </li>
              </ul>
            </div>
          </div>
        ),
        imagePath: '',
        figureCaption: ''
      },
      {
        name: 'المرحلة السادسة: منطق التأكيد وإتمام الطلب (Fulfillment)',
        tools: 'Confirmation Prompts, Fulfillment Logic, Closing Responses',
        desc: 'تركز هذه المرحلة على نقطة التحقق النهائية بين العميل والنظام؛ حيث يراجع البوت تفاصيل الحجز مع العميل قبل اعتماد الطلب وإغلاق الجلسة باحترافية.',
        detailedStepsTitle: 'الخطوات التقنية التفصيلية:',
        detailedSteps: [
          {
            title: 'تأكيد تفاصيل الطلب (Confirmation Management)',
            desc: 'تفعيل رسالة تأكيد تلخص اختيارات العميل (مثل: "...تمام يا فندم، هل نود تأكيد طلب خيمة") لتقليل الأخطاء وتعزيز ثقة العميل قبل التنفيذ.'
          },
          {
            title: 'استراتيجية التنفيذ (Fulfillment Strategy)',
            desc: 'تهيئة طبقة التنفيذ لتعمل فور موافقة العميل وتربط البوت بالواجهة الخلفية (AWS Lambda) لتسجيل بيانات الطلب.'
          },
          {
            title: 'رسالة الختام المخصصة (Closing Response)',
            desc: 'صياغة رسالة ختامية تدرج بيانات العميل ديناميكياً مثل رقم هاتفه {PhoneNumber} لتأكيد استلام الطلب وسرعة التواصل معه.'
          },
          {
            title: 'إنهاء الجلسة بذكاء',
            desc: 'ضبط الخطوة التالية بعد الإغلاق على إنهاء المحادثة (End Conversation) لتحرير الموارد السحابية والحفاظ على نظافة الجلسات.'
          }
        ],
        imagePath: 'AI Conversational Agent Automated Booking Solution (Arabic Project)/6.webp',
        figureCaption: 'شكل 7: هندسة تدفق المحادثة الكامل بدءاً من جمع المتغيرات وحتى رسالة التأكيد وإتمام الطلب.'
      },
      {
        name: 'المرحلة السابعة: إدارة الحوارات الترحيبية وتجربة المستخدم (UX)',
        tools: 'Amazon Lex (V2) - Greeting Intent Configuration',
        desc: 'لضمان تجربة محادثة طبيعية دون تعثر، أنشأت مقصداً مستقلاً للترحيب (GreetingIntent) يتعامل مع عبارات التحية التي يبدأ بها العملاء عادة قبل طرح طلباتهم المباشرة.',
        content: (
          <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed">
            <div>
              <h4 className="text-sm mb-2 font-semibold text-emerald-400">
                آلية العمل:
              </h4>
              <ul className="list-disc list-inside space-y-3 pr-2 text-zinc-300">
                <li>
                  <strong className="text-white">تصميم مقصد الترحيب ( </strong>
                  <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    GreetingIntent
                  </code>
                  <strong className="text-white"> ): </strong>
                  يعمل كبوابة استقبال ذكية تتعرف على بداية المحادثة وتوجه العميل بلطف نحو خدمات الحجز.
                </li>

                <li className="space-y-2">
                  <div>
                    <strong className="text-white">التدريب على التحيات بالعربية والإنجليزية: </strong>
                    تزويد المقصد بأكثر عبارات التحية استخداماً في المنطقة:
                  </div>
                  <ul className="pr-6 space-y-1.5 list-disc list-inside text-zinc-400">
                    <li>
                      <strong className="text-zinc-300">العربية والخليجية: </strong>
                      "السلام عليكم"، "صباح الخير"، "مرحبا"، "هلا".
                    </li>
                    <li>
                      <strong className="text-zinc-300">الإنجليزية: </strong>
                      "Good Morning"، "Hello".
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-white">التوجيه السلس نحو الخدمة: </strong>
                  يرد البوت بتحية مناسبة (مثل "وعليكم السلام") مع دعوة العميل لتحديد نوع الخيمة المطلوبة لتفعيل مقصد{' '}
                  <code dir="ltr" className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    OrderTent
                  </code>{' '}
                  بسلاسة.
                </li>

                <li>
                  <strong className="text-white">رفع دقة النموذج: </strong>
                  فصل التحيات الاجتماعية عن منطق الحجز يقلل التشتت في نموذج NLU ويرفع دقة تصنيف الطلبات الفعلية.
                </li>
              </ul>
            </div>
          </div>
        ),
        imagePath: [
          'AI Conversational Agent Automated Booking Solution (Arabic Project)/7.webp',
          'AI Conversational Agent Automated Booking Solution (Arabic Project)/77.webp'
        ],
        figureCaption: [
          'شكل 8: تهيئة GreetingIntent للتعامل مع عبارات الترحيب باللغتين العربية والإنجليزية.',
          'شكل 9: ربط الرد الترحيبي بتوجيه العميل بسلاسة نحو خطوات حجز الخيمة.'
        ]
      },
      {
        name: 'المرحلة الثامنة: معالجة الاستفسارات غير المتوقعة (Fallback Strategy)',
        tools: 'Amazon Lex (V2) - FallbackIntent',
        desc: 'لضمان عدم ترك أي عميل دون إجابة واضحة، قمت بضبط مقصد الطوارئ (FallbackIntent) ليعمل كـ "شبكة أمان" تتدخل بلباقة عندما يكتب العميل استفساراً خارج نطاق التدريب المعتاد، مما يحافظ على احترافية التجربة واستمرارية التواصل.',
        imagePath: 'AI Conversational Agent Automated Booking Solution (Arabic Project)/8(1).webp',
        figureCaption: 'شكل 10: إعداد FallbackIntent للتعامل الذكي مع الاستفسارات غير المتوقعة وضمان عدم توقف المحادثة.'
      },
      {
        name: 'المرحلة التاسعة: تهيئة بوابة الاتصال وتأمين مفاتيح API',
        tools: 'Twilio Console & REST API Credentials',
        desc: 'لربط البوت بتطبيق واتساب، قمت بتهيئة حساب Twilio Cloud Communications كبوابة مراسلة خارجية، وتأمين بيانات المصادقة الأساسية (Account SID و Auth Token) لتشفير وتوثيق الاتصالات الصادرة من بيئة AWS.',
        imagePath: 'AI Conversational Agent Automated Booking Solution (Arabic Project)/9.webp',
        figureCaption: 'شكل 11: استخراج وتأمين مفاتيح Account SID و Auth Token في لوحة تحكم Twilio لربطها مع AWS.'
      },
      {
        name: 'المرحلة العاشرة: تفعيل بيئة واتساب التجريبية والربط الأولي',
        tools: 'Twilio WhatsApp Sandbox',
        desc: 'إجراء الربط الفعلي بين الهاتف وخوادم Twilio عبر بيئة WhatsApp Sandbox، مما يتيح اختبار إرسال واستقبال الرسائل الآلية في الوقت الفعلي وتحويل البوت السحابي إلى أداة تواصل مباشرة على الهاتف.',
        detailedStepsTitle: 'الخطوات التقنية التفصيلية:',
        detailedSteps: [
          {
            title: 'تهيئة بيئة الاختبار (Sandbox Initiation)',
            desc: 'تفعيل قناة المراسلة الفورية لواتساب داخل بيئة التطوير.'
          },
          {
            title: 'مصادقة الجهاز (Device Handshake)',
            desc: 'مسح رمز QR وإرسال كود التحقق لربط رقم الهاتف بأمان مع الخادم.'
          },
          {
            title: 'اختبار الإرسال الصادر',
            desc: 'إرسال رسالة تجريبية من لوحة التحكم إلى الهاتف للتأكد من جاهزية واجهة البرمجة لتسليم القوالب والرسائل.'
          }
        ],
        imagePath: [
          'AI Conversational Agent Automated Booking Solution (Arabic Project)/10.webp',
          'AI Conversational Agent Automated Booking Solution (Arabic Project)/1010.webp'
        ],
        figureCaption: [
          'شكل 12: إتمام الربط التجريبي لواتساب (WhatsApp Sandbox Handshake) والتحقق من وصول الرسائل.',
          'شكل 13: تأكيد استلام الرسالة التجريبية من Twilio على تطبيق واتساب.'
        ]
      },
      {
        name: 'المرحلة الحادية عشرة: البرمجة السحابية وأتمتة التنبيهات الفورية للإدارة',
        tools: 'AWS Lambda (Python 3.x), Twilio REST API, JSON, Base64 Encoding',
        desc: 'تمثل هذه المرحلة "وحدة المعالجة المركزية" للنظام؛ حيث طورت دالة بايثون سحابية على AWS Lambda للتعامل مع حالات الاستثناء (Fallback). فعندما يطرح العميل سؤالاً غير معتاد، ترسل الدالة فوراً رسالة واتساب إلى مدير المبيعات تتضمن نص سؤال العميل بدقة لضمان عدم ضياع أي فرصة بيعية.',
        content: (
          <div className="space-y-6 text-xs md:text-sm text-zinc-300 leading-relaxed">
            <div>
              <h4 className="text-sm mb-3 font-semibold text-emerald-400">
                الخطوات التقنية التفصيلية:
              </h4>
              <ul className="list-disc list-inside space-y-2.5 pr-2 text-zinc-300">
                <li>
                  <strong className="text-white">استخراج نص رسالة العميل: </strong>
                  تلتقط الدالة متغير{' '}
                  <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    inputTranscript
                  </code>{' '}
                  من حدث Lex للحصول على السؤال الفعلي الذي كتبه العميل.
                </li>
                <li>
                  <strong className="text-white">المصادقة الآمنة (Basic Auth): </strong>
                  تشفير بيانات{' '}
                  <code dir="ltr" className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    account_sid
                  </code>{' '}
                  و{' '}
                  <code dir="ltr" className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    auth_token
                  </code>{' '}
                  باستخدام Base64 وقراءتها من متغيرات البيئة الآمنة (Environment Variables) دون كشفها في الكود.
                </li>
                <li>
                  <strong className="text-white">تجهيز حمولة الرسالة (Payload Engineering): </strong>
                  استخدام <code dir="ltr" className="text-emerald-400 font-mono text-xs">urllib.parse</code> لتنسيق الرسالة وإرسالها إلى رقم واتساب الإدارة متضمنة نص استفسار العميل.
                </li>
                <li>
                  <strong className="text-white">معالجة الأخطاء بمرونة: </strong>
                  تضمين كتلة <code dir="ltr" className="text-amber-400 font-mono text-xs">try-except</code> لضمان استقرار جلسة المحادثة مع العميل حتى في حال حدوث أي تأخير في الاتصال الخارجي.
                </li>
                <li>
                  <strong className="text-white">الرد الديناميكي على العميل: </strong>
                  إرجاع استجابة JSON منظمة إلى Amazon Lex لإبلاغ العميل بأنه تم تحويل استفساره للفريق المختص وسيتم التواصل معه فوراً.
                </li>
              </ul>
            </div>

            {/* الصورة */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3">
              <div className="rounded-lg overflow-hidden border border-zinc-900 bg-black/50">
                <img
                  src="/AI Conversational Agent Automated Booking Solution (Arabic Project)/11.webp"
                  alt="كود دالة AWS Lambda للتنبيهات الفورية"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto rounded-md"
                />
              </div>
              <p className="mt-2.5 text-center text-xs text-zinc-400">
                شكل 14: تطوير دالة Lambda بلغة بايثون لمعالجة أحداث Lex وإرسال تنبيهات واتساب فورية عبر Twilio REST API.
              </p>
            </div>

            {/* بلوك الكود */}
            <div dir="ltr" className="rounded-xl border border-zinc-800 bg-[#0d1117] p-4 overflow-hidden shadow-lg text-left">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80 font-mono text-xs text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  lambda_function.py
                </span>
                <span className="text-zinc-500 text-[11px]">Python 3.x</span>
              </div>

              <pre className="font-mono text-[11px] md:text-xs leading-relaxed text-zinc-200 overflow-x-auto scrollbar-thin max-h-[460px]">
                <code>{`import json
import urllib.parse
import urllib.request
import os
import base64

def lambda_handler(event, context):
    user_msg = event.get('inputTranscript', 'Unknown question')
    
    account_sid = os.environ.get('TWILIO_ACCOUNT_SID', 'ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    auth_token = os.environ.get('TWILIO_AUTH_TOKEN', 'your_twilio_auth_token_here')
    to_number = os.environ.get('MANAGER_WHATSAPP_NUMBER', 'whatsapp:+201000000000')
    from_number = 'whatsapp:+14155238886'
    
    alert_text = f"🚨 A user asked an unhandled question: \\"{user_msg}\\""
    
    data = urllib.parse.urlencode({
        'To': to_number,
        'From': from_number,
        'Body': alert_text
    }).encode()
    
    request = urllib.request.Request(
        f"https://api.twilio.com/2010-04-01/Accounts/{account_sid}/Messages.json",
        data=data,
        method="POST"
    )
    
    auth_str = base64.b64encode(f"{account_sid}:{auth_token}".encode()).decode()
    request.add_header("Authorization", f"Basic {auth_str}")
    
    try:
        urllib.request.urlopen(request)
    except Exception as e:
        print(f"Error sending alert: {e}")

    return {
        "sessionState": {
            "dialogAction": {
                "type": "Close"
            },
            "intent": {
                "name": event['sessionState']['intent']['name'],
                "state": "Fulfilled"
            }
        },
        "messages": [
            {
                "contentType": "PlainText",
                "content": "شكراً لتواصلك معنا! تم إشعار فريقنا المختص عبر واتساب وسنتواصل معك في أقرب وقت."
            }
        ]
    }`}</code>
              </pre>
            </div>
          </div>
        )
      },
      {
        name: 'المرحلة الثانية عشرة: تهيئة قنوات النشر المتعددة (Channel Integration)',
        tools: 'Amazon Lex (V2) - Channel Integrations',
        desc: 'لإتاحة المساعد الذكي للمستخدمين خارج لوحة تحكم AWS، قمت بإنشاء قناة تكامل مخصصة داخل Amazon Lex لربطه بمنصة Twilio SMS/WhatsApp وتوليد رابط الاتصال الآمن.',
        detailedStepsTitle: 'الخطوات التقنية التفصيلية:',
        detailedSteps: [
          {
            title: 'إنشاء قناة التكامل',
            desc: 'إضافة قناة جديدة باسم WhatsApp_BaitAlNokhada ضمن قسم النشر (Deployment).'
          },
          {
            title: 'ربط صلاحيات IAM',
            desc: 'منح Amazon Lex الأذونات اللازمة للتواصل الآمن مع واجهات البرمجة الخارجية.'
          },
          {
            title: 'توليد رابط الاستقبال (Callback URL)',
            desc: 'الحصول على رابط Endpoint الفريد الذي يستقبل من خلاله محرك Lex الرسائل الواردة من بوابة Twilio.'
          }
        ],
        imagePath: [
          'AI Conversational Agent Automated Booking Solution (Arabic Project)/12.webp',
          'AI Conversational Agent Automated Booking Solution (Arabic Project)/1212.webp'
        ],
        figureCaption: [
          '',
          'شكل 15: توليد رابط Callback URL من Amazon Lex ليعمل كنقطة استقبال رئيسية لرسائل واتساب.'
        ]
      },
      {
        name: 'المرحلة الثالثة عشرة: الربط ثنائي الاتجاه (Two-Way Webhook)',
        tools: 'Amazon Lex (V2) & Twilio Sandbox Webhooks',
        desc: 'الخطوة الختامية في البنية التكاملية كانت ضبط رابط Webhook ثنائي الاتجاه؛ بحيث تُوجَّه كل رسالة يرسلها العميل على واتساب فوراً إلى محرك Lex لمعالجتها، ثم يعود الرد الذكي إلى هاتف العميل في أجزاء من الثانية.',
        detailedStepsTitle: 'الخطوات التقنية التفصيلية:',
        detailedSteps: [
          {
            title: 'إدراج رابط Webhook',
            desc: 'إضافة رابط Lex Callback URL داخل إعدادات Twilio Sandbox في حقل استقبال الرسائل الواردة.'
          },
          {
            title: 'توحيد بروتوكول الاتصال',
            desc: 'ضبط طريقة الإرسال على HTTP POST لضمان نقل محتوى الرسالة وبيانات المرسل بأمان وسرعة.'
          },
          {
            title: 'التفعيل والمزامنة',
            desc: 'حفظ الإعدادات لتفعيل الاتصال الحي بين المنصتين؛ حيث تتولى Twilio نقل الرسائل ويتولى Lex الفهم والمعالجة.'
          }
        ],
        imagePath: 'AI Conversational Agent Automated Booking Solution (Arabic Project)/13(1).webp',
        figureCaption: 'شكل 16: ضبط إعدادات Webhook في Twilio Sandbox لربط رسائل واتساب الواردة مباشرة ببوت Amazon Lex.'
      },
      {
        name: 'المرحلة الختامية: التجربة الحية والتحقق الفعلي',
        tools: 'WhatsApp Messenger & Amazon Lex Runtime',
        desc: 'تُتوَّج هذه المراحل بنظام حجز ذكي يعمل بالكامل داخل تطبيق واتساب باللغة العربية واللهجة الإماراتية؛ حيث يستقبل العميل، يجمع تفاصيل الخيمة والمقاس والموقع، ويؤكد الطلب خلال ثوانٍ معدودة دون أي تدخل بشري.',
        imagePath: 'AI Conversational Agent Automated Booking Solution (Arabic Project)/14.webp',
        figureCaption: 'شكل 17: تجربة حية لمساعد بيت النوخذة الذكي على واتساب وهو ينفذ عملية حجز خيمة كاملة آلياً.'
      }
    ],
    conclusionContent: (
      <div className="space-y-6 text-xs md:text-sm text-zinc-300 leading-relaxed pt-2">
        <div>
          <p className="mb-3">
            يجسد مشروع المساعد الذكي لـ (بيت النوخذة) قوة دمج <strong className="text-white">البنية السحابية بدون خوادم (Serverless)</strong> مع <strong className="text-white">الذكاء الاصطناعي التفاعلي</strong> لحل تحديات الأعمال الواقعية؛ فمن خلال ربط <strong className="text-white">Amazon Lex و AWS Lambda و Twilio</strong>، تم بناء نظام ذكي وعالي الكفاءة بتكلفة تشغيلية شبه صفرية.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-emerald-400 mb-2">
            أبرز الإنجازات المحققة:
          </h4>
          <ul className="list-disc list-inside space-y-2 pr-2 text-zinc-300">
            <li>
              <strong className="text-white">توسع تلقائي بدون صيانة: </strong>
              بنية سحابية قادرة على خدمة آلاف العملاء في وقت واحد دون الحاجة لإدارة أي خوادم.
            </li>
            <li>
              <strong className="text-white">تجربة مستخدم محلية (UAE Arabic): </strong>
              تخصيص نموذج NLU لفهم اللهجة الإماراتية والعربية بطلاقة، مما يمنح العميل تجربة تواصل طبيعية وسريعة.
            </li>
            <li>
              <strong className="text-white">رفع الكفاءة التشغيلية: </strong>
              أتمتة جمع بيانات العملاء المحتملين وتفاصيل الحجز على مدار الساعة، مما يقلل العبء الإداري ويسرّع الاستجابة.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-amber-400 mb-1">
            آفاق التطوير والتوسع المستقبلي:
          </h4>
          <p className="text-xs text-zinc-400 mb-2">
            تتميز هذه البنية بالمرونة العالية وقابليتها للتوسع لتشمل:
          </p>
          <ol className="list-decimal list-inside space-y-2 pr-2 text-zinc-300">
            <li>
              <strong className="text-white">الربط المباشر مع الموقع الإلكتروني وأنظمة CRM: </strong>
              مزامنة الحجوزات الواردة من واتساب مباشرة مع قاعدة بيانات الموقع ونظام إدارة علاقات العملاء.
            </li>
            <li>
              <strong className="text-white">توسيع قاعدة المعرفة والدعم الآلي: </strong>
              إضافة مقاصد جديدة للإجابة الفورية عن الأسئلة الشائعة، متابعة حالة الطلبات، وإرسال عروض الأسعار.
            </li>
            <li>
              <strong className="text-white">النشر عبر منصات تواصل متعددة: </strong>
              ربط نفس محرك الذكاء الاصطناعي بقنوات Instagram و Facebook Messenger و Telegram لتوحيد خدمة العملاء.
            </li>
            <li>
              <strong className="text-white">تحليلات المحادثات بالذكاء الاصطناعي: </strong>
              استخدام <strong className="text-white">AWS CloudWatch</strong> لتحليل أنماط استفسارات العملاء وتحسين مسارات التحويل التسويقي.
            </li>
          </ol>
        </div>
      </div>
    ),
    coverImage: 'AI Conversational Agent Automated Booking Solution (Arabic Project)/14.webp'
  },
  {
    id: 'slack-performance-engine',
    tag: 'ذكاء الأعمال المؤسسي (Enterprise BI)',
    title: 'منظومة تقارير السيو الآلية وإشعارات Slack الصباحية',
    subtitle: 'بحيرة بيانات سحابية مؤتمتة ترسل ملخص أداء محركات البحث يومياً إلى فريق العمل',
    techStack: ['Amazon S3', 'AWS Glue', 'Amazon Athena', 'AWS Lambda', 'EventBridge(CloudWatch Events)', 'Slack API', 'Python (Boto3, Pandas)'],
    summary:
      'بنية سيو سحابية متطورة تحوّل بيانات البحث الخام إلى تقارير ذكاء أعمال يومية دون أي تدخل بشري. بمجرد رفع تصدير Google Search Console إلى السحابة، ينطلق مسار ETL متكامل يقوم بفهرسة البيانات وتحليلها عبر SQL وإرسال ملخص بأهم الكلمات المفتاحية والنقرات مباشرة إلى قناة Slack الخاصة بالشركة كل صباح.',
    detailedOverview: `يستعرض هذا المشروع خط أنابيب بيانات سحابي مؤتمت بالكامل لأتمتة استخراج وتحليل مؤشرات أداء السيو. بربط البنية التحتية لـ AWS مع بيانات Google Search Console (GSC)، يلغي هذا النظام الحاجة لإعداد التقارير اليدوية المتكررة ويوفر رؤى فورية حول اتجاهات البحث العضوي.

يكمن جوهر الحل في أتمتة المعالجة بالكامل: فبمجرد وصول ملف البيانات الخام إلى السحابة، تعمل الخدمات في الخلفية على فهرسة المخطط، وتشغيل استعلامات SQL تحليلية، وإرسال ملخص تنفيذي منسق إلى Slack ليبدأ الفريق يومه بقرارات مبنية على البيانات.`,
    whyAws:
      'المتابعة اليدوية لبيانات البحث الضخمة تؤخر اكتشاف الفرص والتغيرات في الترتيب. بدمج جدولة EventBridge مع تخزين S3 واستعلامات Athena ودوال Lambda، يتم تقييم أداء الكلمات المفتاحية وإرسال التقرير اليومي تلقائياً قبل بداية ساعات العمل.',
    phases: [
      {
        name: 'المرحلة الأولى: استخراج بيانات أداء السيو بدقة',
        tools: 'Google Search Console (GSC)',
        desc: 'تبدأ المنظومة باستخراج بيانات الأداء التفصيلية مباشرة من Google Search Console لرصد المؤشرات الأساسية للنمو العضوي، مما يضمن تغذية طبقة البيانات الخام بمعلومات دقيقة حول كيفية وصول الجمهور للعلامة التجارية.',
        detailedStepsTitle: 'الخطوات التقنية التفصيلية:',
        detailedSteps: [
          {
            title: 'تحديد مؤشرات الأداء المستهدفة',
            desc: 'التركيز على تصدير تقرير الكلمات البحثية (Queries) الذي يضم النقرات (Clicks)، مرات الظهور (Impressions)، نسبة النقر (CTR)، ومتوسط الترتيب.'
          },
          {
            title: 'توحيد صيغة البيانات',
            desc: 'تصدير البيانات بصيغة CSV القياسية لضمان توافقها التام مع التخزين السحابي وسكربتات الأتمتة.'
          },
          {
            title: 'ضمان سلامة المصدر',
            desc: 'اعتماد ملف Queries.csv كمصدر بيانات موحد يغطي فترة 3 أشهر لتحليل الاتجاهات بدقة واستمرارية.'
          }
        ],
        imagePath: 'End-to-End Real-Time SEO Analytics Pipeline A Serverless Approach/1.webp',
        figureCaption: 'شكل 1: تصدير بيانات الأداء من Google Search Console بصيغة CSV لتشكيل طبقة البيانات الخام.'
      },
      {
        name: 'المرحلة الثانية: تأسيس بحيرة البيانات السحابية (S3 Data Lake)',
        tools: 'Amazon S3 (Simple Storage Service)',
        desc: 'بناء طبقة التخزين السحابية عبر إنشاء بحيرة بيانات مرنة وآمنة على Amazon S3، مع تنظيم المجلدات بطريقة هرمية تسهل على خدمات التحليل اللاحقة الوصول إلى البيانات ومعالجتها بكفاءة.',
        detailedStepsTitle: 'التفاصيل التقنية الرئيسية:',
        detailedSteps: [
          {
            title: 'إنشاء حاوية التخزين (Bucket Creation)',
            desc: 'تخصيص حاوية S3 باسم quires-seo لتكون المستودع المركزي لكافة بيانات السيو.'
          },
          {
            title: 'التنظيم الهرمي للملفات',
            desc: 'إنشاء مجلد مخصص باسم gsc_queries/ لعزل بيانات Search Console عن أي مصادر بيانات أخرى.'
          },
          {
            title: 'تغذية الطبقة الخام (Bronze Layer)',
            desc: 'رفع ملف Queries.csv إلى المسار المحدد ليكون جاهزاً لمرحلة الاكتشاف والفهرسة الآلية.'
          }
        ],
        imagePath: 'End-to-End Real-Time SEO Analytics Pipeline A Serverless Approach/2.webp',
        figureCaption: 'شكل 2: هيكلة بحيرة البيانات في Amazon S3 داخل حاوية quires-seo وتنظيم ملفات CSV الخام.'
      },
      {
        name: 'المرحلة الثالثة: الفهرسة الآلية واكتشاف المخطط (Schema Discovery)',
        tools: 'AWS Glue & AWS Glue Crawler',
        desc: 'تحويل الملفات الخام المخزنة في S3 إلى جداول قابلة للاستعلام باستخدام AWS Glue Crawler، الذي يفحص الملفات تلقائياً ويستنتج أسماء الأعمدة وأنواع البيانات ويحفظها في كتالوج مركزي.',
        detailedStepsTitle: 'الخطوات التقنية التفصيلية:',
        detailedSteps: [
          {
            title: 'إنشاء قاعدة البيانات المنطقية',
            desc: 'تأسيس قاعدة بيانات باسم seo_analytics_db داخل كتالوج AWS Glue لتضم جداول تحليلات السيو.'
          },
          {
            title: 'تهيئة الزاحف (gsc_crawler)',
            desc: 'توجيه الزاحف إلى المسار s3://quires-seo/gsc_queries/ ومنحه صلاحيات الوصول عبر دور أمان مخصص (IAM Role).'
          },
          {
            title: 'استنتاج بنية الأعمدة',
            desc: 'تحليل ملف Queries.csv تلقائياً والتعرف على حقول الكلمات والنقرات والظهور وتحديد أنواعها البرمجية.'
          },
          {
            title: 'مزامنة الجداول',
            desc: 'تشغيل الزاحف بنجاح وتأكيد إنشاء الجدول الجديد في الكتالوج دون أي إعداد يدوي.'
          }
        ],
        imagePath: [
          'End-to-End Real-Time SEO Analytics Pipeline A Serverless Approach/3(1).webp',
          'End-to-End Real-Time SEO Analytics Pipeline A Serverless Approach/33.webp'
        ],
        figureCaption: [
          'شكل 3: لوحة متابعة AWS Glue Crawler وتوضح جاهزية الزاحف gsc_crawler لمزامنة البيانات.',
          'شكل 4: سجلات التشغيل التي تؤكد تحديث قاعدة بيانات seo_analytics_db وإنشاء جدول البيانات الوصفية.'
        ]
      },
      {
        name: 'المرحلة الرابعة: التحليل الذكي عبر استعلامات SQL السحابية',
        tools: 'Amazon Athena & SQL',
        desc: 'تفعيل طبقة التحليل السحابية عبر Amazon Athena لتشغيل استعلامات SQL مباشرة على البيانات المفهرسة في كتالوج Glue، مما يتيح استخراج رؤى دقيقة حول الكلمات المفتاحية بسرعة فائقة ودون الحاجة لخوادم قواعد بيانات.',
        detailedStepsTitle: 'التفاصيل التقنية الرئيسية:',
        detailedSteps: [
          {
            title: 'تهيئة بيئة الاستعلام',
            desc: 'ربط Athena بقاعدة بيانات seo_analytics_db وتحديد مسار S3 لحفظ نتائج الاستعلامات بشكل منظم.'
          },
          {
            title: 'التحقق من سلامة البيانات',
            desc: 'تشغيل استعلام الفحص الأولي للتأكد من تطابق الأعمدة (Query, Clicks, Impressions, CTR, Position) بين ملف S3 وكتالوج Glue.'
          },
          {
            title: 'تحليل الفرص البحثية',
            desc: 'استخدام أوامر SQL لتصفية البيانات واكتشاف الكلمات ذات مرات الظهور العالية والترتيب القريب من الصفحة الأولى (Striking Distance Keywords).'
          },
          {
            title: 'سرعة التنفيذ',
            desc: 'معالجة البيانات واستخراج النتائج في أجزاء من الثانية مع قابلية التوسع لملايين السجلات.'
          }
        ],
        imagePath: 'End-to-End Real-Time SEO Analytics Pipeline A Serverless Approach/4.webp',
        figureCaption: 'شكل 5: تشغيل استعلامات SQL عبر Amazon Athena على بيانات Search Console والتحقق من دقة المؤشرات.'
      },
      {
        name: 'المرحلة الخامسة: تكامل واجهة Slack وبناء قناة الإشعارات',
        tools: 'Slack API (Incoming Webhooks)',
        desc: 'لتحويل التحليلات السحابية إلى تقارير يومية تصل مباشرة إلى فريق العمل، أنشأت بوابة اتصال آمنة عبر Slack API لتمكين بيئة AWS من إرسال التقارير المنسقة تلقائياً إلى قناة الشركة.',
        detailedStepsTitle: 'الخطوات التقنية التفصيلية:',
        detailedSteps: [
          {
            title: 'إنشاء تطبيق Slack مخصص',
            desc: 'تطوير تطبيق داخلي عبر منصة Slack API مخصص لمساحة عمل شركة "بيت النوخذة".'
          },
          {
            title: 'تفعيل Incoming Webhook',
            desc: 'ربط Webhook آمن بقناة #bait-al-nokhada لاستقبال التقارير الآلية فور صدورها.'
          },
          {
            title: 'تحديد نطاق الصلاحيات (Security Scoping)',
            desc: 'منح التطبيق أذونات النشر في القناة المحددة فقط التزاماً بمعايير الأمان.'
          }
        ],
        imagePath: [
          'End-to-End Real-Time SEO Analytics Pipeline A Serverless Approach/5.webp',
          'End-to-End Real-Time SEO Analytics Pipeline A Serverless Approach/55.webp'
        ],
        figureCaption: [
          '',
          'شكل 6: تهيئة Slack API وتوليد رابط Incoming Webhook الآمن لإرسال التقارير الآلية إلى قناة الشركة.'
        ]
      },
      {
        name: 'المرحلة السادسة: التنسيق السحابي والأتمتة الآمنة عبر AWS Lambda',
        tools: 'AWS Lambda (Python 3.x) & AWS IAM',
        desc: 'تطوير "المنسق الرئيسي" للنظام عبر دالة AWS Lambda مكتوبة بلغة بايثون؛ حيث تجلب أحدث مؤشرات السيو من بحيرة البيانات، وتنسقها في تقرير واضح وسهل القراءة، ثم ترسله إلى Slack ضمن بيئة محمية بصلاحيات IAM دقيقة.',
        content: (
          <div className="space-y-6 text-xs md:text-sm text-zinc-300 leading-relaxed">
            <div>
              <h4 className="text-sm mb-3 font-semibold text-emerald-400">
                الخطوات التقنية التفصيلية:
              </h4>
              <ul className="list-disc list-inside space-y-2.5 pr-2 text-zinc-300">
                <li>
                  <strong className="text-white">تطوير منطق المعالجة: </strong>
                  كتابة سكربت بايثون باستخدام <strong className="text-white">Boto3 SDK</strong> لقراءة ملفات البيانات من S3 واستخراج أعلى الكلمات المفتاحية أداءً.
                </li>
                <li>
                  <strong className="text-white">إدارة الهوية والصلاحيات (IAM): </strong>
                  إعداد دور تنفيذ مخصص ({' '}
                  <code dir="ltr" className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                    SEO_Slack_Alert-role
                  </code>{' '}
                  ) بسياسات صلاحيات محددة للتفاعل الآمن مع S3 و Athena.
                </li>
                <li>
                  <strong className="text-white">تنسيق التقرير التنفيذي: </strong>
                  ترتيب أهم الكلمات المفتاحية وعدد نقراتها في رسالة منسقة وواضحة تسهل قراءتها على Slack.
                </li>
              </ul>
            </div>

            {/* الصورة الأولى */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3">
              <div className="rounded-lg overflow-hidden border border-zinc-900 bg-black/50">
                <img
                  src="/End-to-End Real-Time SEO Analytics Pipeline A Serverless Approach/6.webp"
                  alt="واجهة دالة AWS Lambda"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto rounded-md"
                />
              </div>
              <p className="mt-2.5 text-center text-xs text-zinc-400">
                شكل 6أ: واجهة AWS Lambda وتوضح إعدادات التشغيل السحابي والارتباط بمصادر البيانات.
              </p>
            </div>

            {/* بلوك الكود */}
            <div dir="ltr" className="rounded-xl border border-zinc-800 bg-[#0d1117] p-4 overflow-hidden shadow-lg text-left">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80 font-mono text-xs text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  lambda_function.py
                </span>
                <span className="text-zinc-500 text-[11px]">Python 3.x</span>
              </div>

              <pre className="font-mono text-[11px] md:text-xs leading-relaxed text-zinc-200 overflow-x-auto scrollbar-thin max-h-[440px]">
                <code>{`import boto3
import os
import json
import urllib3
import csv
from io import StringIO

def lambda_handler(event, context):
    s3 = boto3.client('s3')
    slack_url = os.environ.get("SLACK_WEBHOOK_URL") # Configured via AWS Lambda Env Vars
    http = urllib3.PoolManager()
    
    bucket = 'quires-seo'
    key = 'gsc_queries/Queries.csv'
    
    try:
        # 1. Fetch CSV file from S3
        response = s3.get_object(Bucket=bucket, Key=key)
        content = response['Body'].read().decode('utf-8')
        
        # 2. Parse CSV dataset
        f = StringIO(content)
        reader = csv.DictReader(f)
        
        report = "🚀 *BAIT AL NOKHADA - DAILY SEO REPORT* \\n"
        report += "📅 تقرير أهم الكلمات من ملف الـ CSV الخاص بك:\\n"
        report += "------------------------------------------\\n"
        
        # Extract top 5 performing queries
        count = 0
        for row in reader:
            if count < 5:
                query = row.get('Top queries', 'N/A')
                clicks = row.get('Clicks', '0')
                report += f"🔹 *Keyword:* {query} | *Clicks:* {clicks}\\n"
                count += 1
        
        # 3. Dispatch alert payload to Slack incoming webhook
        msg = {'text': report}
        encoded_msg = json.dumps(msg).encode('utf-8')
        resp = http.request('POST', slack_url, body=encoded_msg)
        
        return {
            'statusCode': 200,
            'body': "Report sent successfully to Slack!"
        }
        
    except Exception as e:
        print(f"Error: {e}")
        return {
            'statusCode': 500,
            'body': str(e)
        }`}</code>
              </pre>
            </div>

            {/* الصورة الثانية */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3">
              <div className="rounded-lg overflow-hidden border border-zinc-900 bg-black/50">
                <img
                  src="/End-to-End Real-Time SEO Analytics Pipeline A Serverless Approach/66.webp"
                  alt="إعدادات IAM Execution Role"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto rounded-md"
                />
              </div>
              <p className="mt-2.5 text-center text-xs text-zinc-400">
                شكل 6ب: إعداد دور التنفيذ (SEO_Slack_Alert-role) لتطبيق مبدأ الحد الأدنى من الصلاحيات بين S3 و Athena.
              </p>
            </div>
          </div>
        )
      },
      {
        name: 'المرحلة السابعة: التسليم النهائي والتواصل مع فريق العمل',
        tools: 'Slack Messenger',
        desc: 'المرحلة الختامية التي تحوّل العمليات السحابية المعقدة إلى ملخص صباحي بسيط ومباشر يصل إلى قناة التواصل الخاصة بالشركة، مما يتيح للإدارة وفريق التسويق متابعة النمو العضوي دون أي عوائق تقنية.',
        detailedStepsTitle: 'الخطوات التقنية التفصيلية:',
        detailedSteps: [
          {
            title: 'التحقق الفعلي ودعم العربية',
            desc: 'كما يظهر في مخرجات Slack النهائية، يعالج النظام الكلمات البحثية باللغة العربية واللهجة الإماراتية مع الحفاظ التام على سلامة ترميز الحروف (UTF-8).'
          },
          {
            title: 'إبراز المؤشرات الأساسية',
            desc: 'يعرض التقرير أهم الكلمات البحثية (Top Queries) وعدد النقرات المحققة لكل كلمة في لمحة سريعة.'
          },
          {
            title: 'الأثر التشغيلي',
            desc: 'إرسال هذا التحديث تلقائياً كل صباح في تمام الساعة 9:00 صباحاً يختصر وقت إعداد التقارير اليدوية بنسبة 100%، ويتيح للفريق التركيز على التحسين والتطوير.'
          }
        ],
        imagePath: 'End-to-End Real-Time SEO Analytics Pipeline A Serverless Approach/7.webp',
        figureCaption: 'شكل 8: عرض حي لمخرجات بوت التقارير داخل قناة Slack، ويظهر التقرير اليومي الآلي لأداء البحث لشركة بيت النوخذة.'
      }
    ],
    conclusionContent: (
      <div className="space-y-6 text-xs md:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/80 pt-6 mt-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-3">
            الخلاصة وأبرز النتائج الهندسية
          </h3>
          <p className="mb-3">
            يمثل بناء بحيرة بيانات السيو على AWS نقلة نوعية في طريقة إدارة وتحليل بيانات التسويق الرقمي؛ فبالانتقال من الجداول الثابتة إلى <strong className="text-white">بنية سحابية بدون خوادم (Cloud-Native Serverless)</strong>، أصبح النظام يوفر أساساً لحظياً لاتخاذ القرارات الاستراتيجية.
          </p>
          <p>
            يثبت هذا المشروع أن الجمع بين <strong className="text-white">خبرة السيو العميقة</strong> و <strong className="text-white">هندسة السحابة</strong> يقلل العبء التشغيلي بشكل جذري ويرفع دقة البيانات وسرعة الوصول إليها.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-emerald-400 mb-2">
            أبرز الإنجازات:
          </h4>
          <ul className="list-disc list-inside space-y-2 pr-2 text-zinc-300">
            <li>
              <strong className="text-white">بنية تحتية مستدامة: </strong>
              مستودع بيانات قابل للتوسع عبر Amazon S3 و AWS Glue يستوعب سنوات من بيانات البحث بصيانة شبه معدومة.
            </li>
            <li>
              <strong className="text-white">تحليلات ذكية قابلة للتنفيذ: </strong>
              تحويل ملفات Search Console الخام تلقائياً إلى رؤى دقيقة عبر استعلامات SQL في Amazon Athena.
            </li>
            <li>
              <strong className="text-white">إلغاء تأخير التقارير: </strong>
              إيصال النتائج مباشرة إلى منصة تواصل الفريق (Slack) عبر منسق بايثون سحابي يعمل تلقائياً.
            </li>
            <li>
              <strong className="text-white">كفاءة التكلفة: </strong>
              الاستفادة من نموذج الدفع حسب الاستخدام في AWS لتشغيل المنظومة بالكامل بتكلفة لا تتجاوز بضعة سنتات شهرياً.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-amber-400 mb-2">
            آفاق التوسع والتطوير المستقبلي:
          </h4>
          <ol className="list-decimal list-inside space-y-2 pr-2 text-zinc-300">
            <li>
              <strong className="text-white">دمج مصادر بيانات متعددة: </strong>
              توسيع بحيرة البيانات لاستيعاب بيانات Google Ads و SEMrush و Screaming Frog للحصول على رؤية تسويقية متكاملة.
            </li>
            <li>
              <strong className="text-white">التنبؤ بالزيارات عبر تعلم الآلة: </strong>
              استخدام Amazon SageMaker للتنبؤ باتجاهات الزيارات المستقبلية بناءً على البيانات التاريخية والموسمية.
            </li>
            <li>
              <strong className="text-white">توصيات تحسين تلقائية بالذكاء الاصطناعي: </strong>
              تطوير دالة Lambda لاكتشاف تراجع الترتيب واقتراح تحسينات فورية للصفحات المستهدفة.
            </li>
            <li>
              <strong className="text-white">لوحات قيادة تنفيذية: </strong>
              ربط قاعدة بيانات Athena مع <strong className="text-white">Amazon QuickSight</strong> لتوفير تقارير بصرية تفاعلية للإدارة العليا.
            </li>
          </ol>
        </div>
      </div>
    ),
    coverImage: 'End-to-End Real-Time SEO Analytics Pipeline A Serverless Approach/7.webp'
  }
];

export default function ArabicCloudEngineeringPage() {
  const [selectedProject, setSelectedProject] = useState<CloudProject | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-white selection:bg-[#ff2e7e] selection:text-white"
      style={{ fontFamily: 'var(--font-cairo), sans-serif' }}
    >
      <NavbarAr />

      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-12 pb-28 text-right">
        {/* رابط العودة */}
        <Link
          href="/ar"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors mb-10"
        >
          <span>→</span>
          <span>العودة إلى الرئيسية</span>
        </Link>

        {/* 1. القسم التمهيدي (HERO) */}
        <section className="relative p-8 md:p-14 rounded-3xl bg-gradient-to-b from-[#0e0e12] via-[#09090b] to-black border border-zinc-850 shadow-2xl mb-20 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff2e7e]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#ff2e7e]/15 border border-[#ff2e7e]/30 text-[#ff2e7e] text-xs font-semibold">
                البنية التحتية السحابية والأتمتة
              </span>
              <span dir="ltr" className="px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs">
                AWS Certified • Cloud Solutions Architecture
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              هندسة السحابة وخطوط أنابيب بيانات السيو الذكية
            </h1>

            <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal max-w-3xl">
              انطلقت رحلتي في هندسة السحابة على <strong className="text-white">AWS</strong> من حاجة عملية حقيقية؛ فإدارة أحجام ضخمة من بيانات محركات البحث، وتتبع مئات الروابط الخلفية لحظياً، وتحويل استفسارات العملاء إلى حجوزات آلية، كشفت بوضوح حدود الجداول التقليدية والتقارير اليدوية.
            </p>

            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal max-w-3xl">
              اعتمدت على خدمات أمازون السحابية لبناء خطوط أنابيب بيانات تعمل بدون خوادم (Serverless)، وقواعد بيانات مستجيبة للأحداث، ومساعدات محادثة ذكية باللغة العربية—لربط خوارزميات البحث ببنية سحابية مؤتمتة بالكامل.
            </p>

            {/* شريط التقنيات */}
            <div dir="ltr" className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t border-zinc-850">
              {['AWS Lambda', 'Amazon S3', 'DynamoDB', 'AWS Glue', 'Amazon Athena', 'Amazon Lex', 'Python Boto3', 'Aurora RDS', 'CloudWatch'].map(
                (skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* 2. عرض المشاريع السحابية */}
        <section className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-zinc-850">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#ff2e7e] font-semibold mb-1">
                التطبيقات الهندسية العملية
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                أبرز مشاريع البنية السحابية على AWS
              </h2>
            </div>
            <p className="text-xs text-zinc-500">
              اضغط على أي مشروع لاستعراض التوثيق التقني الكامل ومراحل التنفيذ ↖
            </p>
          </div>

          <div className="space-y-16">
            {cloudProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 md:p-12 rounded-3xl bg-[#0a0a0c] border border-zinc-850 shadow-2xl space-y-8 group hover:border-zinc-700 transition-colors"
              >
                {/* رأس البطاقة */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-850">
                  <div>
                    <span className="text-xs font-semibold text-[#ff2e7e]">
                      {project.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1.5">{project.subtitle}</p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-[#ff2e7e] text-zinc-300 hover:text-white border border-zinc-800 hover:border-[#ff2e7e] text-xs font-semibold transition-all self-start md:self-auto shrink-0 flex items-center gap-2"
                  >
                    <span>قراءة التوثيق الهندسي الكامل</span>
                    <span>↖</span>
                  </button>
                </div>

                {/* ملخص المشروع ولماذا AWS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-zinc-400">
                      هدف المشروع
                    </div>
                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-normal">
                      {project.summary}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-amber-400">
                      لماذا AWS وكيف تخدم السيو؟
                    </div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      {project.whyAws}
                    </p>
                  </div>
                </div>

                {/* صورة الغلاف / المخطط */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative h-64 md:h-84 w-full rounded-2xl overflow-hidden border border-zinc-800 bg-[#070709] cursor-pointer group/img flex items-center justify-center"
                >
                  <img
                    src={getImgSrc(project.coverImage)}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover/img:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/Website audit.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-black/90 border border-zinc-700 text-xs text-white">
                      استعراض المخطط المعماري ومراحل التنفيذ
                    </span>
                  </div>
                </div>

                {/* التقنيات المستخدمة */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-850">
                  <span className="text-xs text-zinc-500 ml-2">التقنيات المستخدمة:</span>
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      dir="ltr"
                      className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* 3. نافذة التوثيق التقني الكامل (MODAL) */}
      <AnimatePresence>
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto cursor-zoom-out"
          >
            <motion.div
              dir="rtl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] bg-[#0c0c0e] border border-zinc-800 rounded-3xl p-8 md:p-14 overflow-y-auto cursor-default space-y-12 shadow-2xl selection:bg-[#ff2e7e] text-right"
            >
              {/* زر الإغلاق */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="إغلاق"
                className="sticky top-0 float-left -mt-4 -ml-4 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#ff2e7e] text-zinc-400 hover:text-white flex items-center justify-center text-sm font-mono transition-colors z-20"
              >
                ✕
              </button>

              {/* رأس النافذة */}
              <div className="space-y-4 pb-8 border-b border-zinc-850">
                <span className="px-3.5 py-1 rounded-full bg-[#ff2e7e]/15 border border-[#ff2e7e]/30 text-[#ff2e7e] text-xs font-semibold">
                  {selectedProject.tag}
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mt-2 leading-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-xs md:text-sm text-zinc-400">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* نظرة عامة على البنية */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-[#ff2e7e]">
                  نظرة عامة على البنية المعمارية
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {selectedProject.detailedOverview}
                </p>
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-850 text-xs md:text-sm text-zinc-400 leading-relaxed">
                  <span className="text-amber-400 font-bold block mb-1">المبرر الهندسي:</span>
                  {selectedProject.whyAws}
                </div>
              </div>

              {/* عنوان المراحل */}
              <div className="space-y-10">
                <h3 className="text-xs font-bold text-zinc-400">
                  مراحل التنفيذ والتفاصيل التقنية
                </h3>
              </div>

              {/* قائمة المراحل */}
              <div className="space-y-8">
                {selectedProject.phases.map((phase, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-6 md:p-8 rounded-2xl bg-zinc-950 border border-zinc-850 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-900">
                      <span className="text-base font-bold text-white">{phase.name}</span>
                      <span dir="ltr" className="text-xs font-mono text-[#ff2e7e]">{phase.tools}</span>
                    </div>

                    {phase.desc && (
                      <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                        {phase.desc}
                      </p>
                    )}

                    {/* المحتوى المخصص للمرحلة */}
                    {phase.content}

                    {/* كيف تُقرأ البيانات */}
                    {phase.howDataIsRead && (
                      <div className="space-y-1">
                        <strong className="text-white text-xs md:text-sm block">آلية قراءة البيانات:</strong>
                        <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                          {phase.howDataIsRead}
                        </p>
                      </div>
                    )}

                    {/* بلوك استعلام SQL */}
                    {phase.sqlQuery && (
                      <div className="space-y-2">
                        {phase.sqlQueryIntro && (
                          <p className="text-xs md:text-sm text-zinc-300">
                            <strong className="text-white">استعلام SQL: </strong>
                            {phase.sqlQueryIntro}
                          </p>
                        )}
                        <div dir="ltr" className="p-4 rounded-xl bg-black border border-zinc-800 font-mono text-xs text-emerald-400 overflow-x-auto text-left">
                          {phase.sqlQuery}
                        </div>
                      </div>
                    )}

                    {/* قوة التصور البصري */}
                    {phase.thePowerOfVisualization && (
                      <div className="space-y-1">
                        <strong className="text-white text-xs md:text-sm block">قوة التصور البصري للبيانات:</strong>
                        <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                          {phase.thePowerOfVisualization}
                        </p>
                      </div>
                    )}

                    {/* الخطوات التقنية التفصيلية */}
                    {phase.detailedSteps && (
                      <div className="space-y-3 pt-2">
                        <strong className="text-xs md:text-sm block font-semibold text-emerald-400">
                          {phase.detailedStepsTitle || 'الخطوات التقنية التفصيلية:'}
                        </strong>
                        <ol className="space-y-3 text-xs md:text-sm text-zinc-300 list-decimal list-inside leading-relaxed">
                          {phase.detailedSteps.map((step, sIdx) => (
                            <li key={sIdx} className="space-y-1">
                              <strong className="text-white font-semibold">{step.title}: </strong>
                              <span>{step.desc}</span>
                              {step.subPoints && (
                                <ul className="pr-6 pt-1 space-y-1 list-disc list-inside text-zinc-400 text-xs">
                                  {step.subPoints.map((sub, subIdx) => (
                                    <li key={subIdx}>{sub}</li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* صندوق القيمة الحقيقية */}
                    {phase.realValue && (
                      <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-850 text-xs md:text-sm text-zinc-300 leading-relaxed">
                        <strong className="text-amber-400 block mb-1">
                          {phase.realValueTitle || 'القيمة الهندسية:'}
                        </strong>
                        {phase.realValue}
                      </div>
                    )}

                    {/* الإجراءات الرئيسية */}
                    {phase.keyActions &&
                      phase.keyActions.map((action, aIdx) => (
                        <div key={aIdx} className="text-xs text-emerald-400 flex items-start gap-1.5 pt-1">
                          <span className="font-bold shrink-0">إجراء رئيسي:</span>
                          <span>{action}</span>
                        </div>
                      ))}

                    {/* صور المرحلة */}
                    {phase.imagePath && (
                      <div className="space-y-2 pt-2">
                        {Array.isArray(phase.imagePath) ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {phase.imagePath.map((img, idx) => (
                              <div
                                key={idx}
                                onClick={() => setLightboxImg(img ? getImgSrc(img) : null)}
                                className="group relative h-56 md:h-64 w-full rounded-xl overflow-hidden border border-zinc-800 bg-[#070709] cursor-pointer"
                              >
                                <img
                                  src={getImgSrc(img)}
                                  alt={`${phase.name || 'لقطة شاشة'} ${idx + 1}`}
                                  className="w-full h-full object-contain group-hover:scale-101 transition-transform"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/Website audit.jpg';
                                  }}
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <span className="text-xs text-white bg-black/80 px-3 py-1.5 rounded-lg border border-zinc-700">
                                    اضغط لتكبير الصورة ↖
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div
                            onClick={() =>
                              setLightboxImg(phase.imagePath ? getImgSrc(phase.imagePath as string) : null)
                            }
                            className="group relative h-64 md:h-80 w-full rounded-xl overflow-hidden border border-zinc-800 bg-[#070709] cursor-pointer"
                          >
                            <img
                              src={getImgSrc(phase.imagePath as string)}
                              alt={phase.name || 'لقطة شاشة'}
                              className="w-full h-full object-contain group-hover:scale-101 transition-transform"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/Website audit.jpg';
                              }}
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-xs text-white bg-black/80 px-3 py-1.5 rounded-lg border border-zinc-700">
                                اضغط لتكبير الصورة ↖
                              </span>
                            </div>
                          </div>
                        )}

                        {/* وصف الصورة */}
                        {phase.figureCaption && (
                          <p className="text-center text-xs text-zinc-400 mt-2">
                            {Array.isArray(phase.figureCaption)
                              ? phase.figureCaption.filter(Boolean).join(' | ')
                              : phase.figureCaption}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* الخلاصة والمخرجات */}
              <div className="p-6 rounded-2xl bg-gradient-to-l from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 flex items-start gap-4">
                <span className="text-xl">⚡</span>
                <div className="w-full">
                  <div className="text-xs font-bold text-emerald-400">
                    الخلاصة والمخرجات الرئيسية
                  </div>
                  {selectedProject.conclusionContent ? (
                    <div className="mt-3">{selectedProject.conclusionContent}</div>
                  ) : (
                    <p className="text-xs md:text-sm text-zinc-300 mt-1 font-medium">
                      {selectedProject.keyTakeaway}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* عارض الصور المكبّرة (LIGHTBOX) */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img src={lightboxImg} alt="معاينة مكبرة" className="max-w-full max-h-full object-contain" />
          </div>
          <span className="absolute top-6 left-8 text-zinc-400 text-sm">اضغط في أي مكان للإغلاق ✕</span>
        </div>
      )}

      <FooterAr />
    </div>
  );
}