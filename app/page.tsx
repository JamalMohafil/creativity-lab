import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Clock, Lightbulb } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-sm mx-auto space-y-8">
          {/* Profile Section - Enhanced */}
          <div className="text-center space-y-6">
            {/* Enhanced Larger Logo */}
            <div className="relative mx-auto w-32 h-32">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                <Lightbulb className="w-14 h-14 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white">مختبر الإبداع</h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xs mx-auto">
              مختبر التعليم المتخصص في تطوير المهارات الإبداعية والتقنية من خلال محتوى حصري ومتميز
مع اساتذة محترفين              </p>
              <div className="flex items-center justify-center gap-2 text-purple-400 text-base">
                <Sparkles className="w-5 h-5" />
                <span>سعر موحد على جميع المنصات</span>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Links */}
          <div className="space-y-4">
            {/* Patreon - Enhanced */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-orange-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <CardContent className="p-0">
                <Button className="w-full h-10 bg-transparent hover:bg-transparent text-white border-0 text-xl font-semibold flex items-center justify-center gap-4 px-6">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-orange-500">
                      <path d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z" />
                    </svg>
                  </div>
                  <span className="text-right " dir="rtl">اشترك عبر Patreon</span>
                </Button>
              </CardContent>
            </Card>

            {/* TikTok - Enhanced with Better Logo */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-pink-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <CardContent className="p-0">
                <Button className="w-full h-10 bg-transparent hover:bg-transparent text-white border-0 text-xl font-semibold flex items-center justify-center gap-4 px-6">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      {/* TikTok Enhanced Logo */}
                      <path
                        d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                        fill="#25F4EE"
                      />
                      <path
                        d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                        fill="#FE2C55"
                        transform="translate(-0.5,-0.5)"
                      />
                      <path
                        d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span className="text-right" dir="rtl">اشترك عبر TikTok</span>
                </Button>
              </CardContent>
            </Card>

            {/* Coming Soon Divider */}
            <div className="flex items-center justify-center py-6">
              <Badge className="bg-gray-800/90 text-gray-200 px-6 py-3 text-base font-semibold flex items-center gap-3 border border-gray-600 rounded-full">
                <Clock className="w-5 h-5" />
                قادم قريباً
              </Badge>
            </div>

            {/* WhatsApp - Coming Soon Enhanced with Better Logo */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 opacity-90 border-dashed">
              <CardContent className="p-0">
                <Button
                  disabled
                  className="w-full h-10 bg-transparent text-gray-400 border-0 text-xl font-semibold flex items-center justify-center gap-4 px-6 cursor-not-allowed"
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                  </div>
                  <span className="text-right" dir="rtl">اشترك عبر WhatsApp</span>
                </Button>
              </CardContent>
            </Card>

            {/* Instagram - Coming Soon Enhanced with Real Logo */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 opacity-90 border-dashed">
              <CardContent className="p-0">
                <Button
                  disabled
                  className="w-full h-10 bg-transparent text-gray-400 border-0 text-xl font-semibold flex items-center justify-center gap-4 px-6 cursor-not-allowed"
                >
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 p-0.5"
                    style={{
                      background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                    }}
                  >
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <defs>
                          <linearGradient id="instagram-gradient-inner" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f09433" />
                            <stop offset="25%" stopColor="#e6683c" />
                            <stop offset="50%" stopColor="#dc2743" />
                            <stop offset="75%" stopColor="#cc2366" />
                            <stop offset="100%" stopColor="#bc1888" />
                          </linearGradient>
                        </defs>
                        {/* Instagram Camera */}
                        <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#instagram-gradient-inner)" />
                        {/* Camera Circle */}
                        <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="2.5" />
                        {/* Inner Circle */}
                        <circle cx="12" cy="12" r="1.5" fill="white" />
                        {/* Camera Dot */}
                        <circle cx="18.5" cy="5.5" r="1.5" fill="white" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-right" dir="rtl">اشترك عبر Instagram</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Footer */}
          <div className="text-center pt-10 space-y-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>
            <p className="text-gray-400 text-base">اشترك للحصول على أحدث المحتويات التعليمية</p>
            <div className="flex items-center justify-center gap-2 text-purple-400">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">مختبر الإبداع © {new Date().getFullYear()}</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
