import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Clock, Zap } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-md mx-auto space-y-8">
          {/* Enhanced Profile Section */}
          <div className="text-center space-y-6">
            {/* Enhanced Logo */}
            <div className="relative mx-auto w-32 h-32 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300 pulse-glow"></div>
              <div className="relative w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-purple-500/30 float-animation">
                <div className="relative z-10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white mr-2" />
                  <Sparkles className="w-12 h-12 text-white" />
                  <Zap className="w-8 h-8 text-white ml-2" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-black gradient-text arabic-text">مختبر الإبداع</h1>
              <p className="text-gray-300 text-lg arabic-text">اختر المنصة المفضلة لديك للاشتراك</p>
              <div className="flex items-center justify-center gap-2 text-purple-400">
                <Sparkles className="w-4 h-4" />
                <p className="text-sm font-semibold arabic-text">سعر موحد على جميع المنصات</p>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Enhanced Active Links */}
          <div className="space-y-5">
            {/* Enhanced Patreon */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative overflow-hidden shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-r from-orange-500 to-red-500 border-0">
                <CardContent className="p-0">
                  <Button className="w-full h-18 bg-transparent hover:bg-white/10 text-white border-0 rounded-2xl text-xl font-bold flex items-center justify-center gap-4 transition-all duration-300 group-hover:scale-105">
                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-orange-500">
                        <path d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z" />
                      </svg>
                    </div>
                    <span className="arabic-text">اشترك عبر Patreon</span>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced YouTube with Real Logo */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative overflow-hidden shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-r from-red-600 to-red-700 border-0">
                <CardContent className="p-0">
                  <Button className="w-full h-18 bg-transparent hover:bg-white/10 text-white border-0 rounded-2xl text-xl font-bold flex items-center justify-center gap-4 transition-all duration-300 group-hover:scale-105">
                    <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      <svg viewBox="0 0 24 24" className="w-8 h-8">
                        {/* YouTube Red Background */}
                        <rect width="24" height="17" y="3.5" rx="3" fill="#FF0000" />
                        {/* White Play Button Triangle */}
                        <path d="M10 8.5v7l5.5-3.5L10 8.5z" fill="white" />
                      </svg>
                    </div>
                    <span className="arabic-text">اشترك عبر YouTube</span>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Coming Soon Badge */}
            <div className="flex items-center justify-center py-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full blur opacity-50"></div>
                <Badge className="relative bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 px-8 py-4 text-base font-bold flex items-center gap-3 rounded-full shadow-2xl border border-gray-500">
                  <Clock className="w-5 h-5 animate-spin" />
                  <span className="arabic-text">قادم قريباً</span>
                </Badge>
              </div>
            </div>

            {/* Enhanced WhatsApp - Coming Soon */}
            <div className="group relative opacity-60">
              <Card className="overflow-hidden shadow-xl bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-dashed border-gray-600 rounded-2xl">
                <CardContent className="p-0">
                  <Button
                    disabled
                    className="w-full h-18 bg-transparent text-gray-400 border-0 rounded-2xl text-xl font-bold flex items-center justify-center gap-4 cursor-not-allowed"
                  >
                    <div className="w-11 h-11 bg-gray-600 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-green-400">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                      </svg>
                    </div>
                    <span className="arabic-text">اشترك عبر WhatsApp</span>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Instagram with Real Logo */}
            <div className="group relative opacity-60">
              <Card className="overflow-hidden shadow-xl bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-dashed border-gray-600 rounded-2xl">
                <CardContent className="p-0">
                  <Button
                    disabled
                    className="w-full h-18 bg-transparent text-gray-400 border-0 rounded-2xl text-xl font-bold flex items-center justify-center gap-4 cursor-not-allowed"
                  >
                    <div className="w-11 h-11 bg-gray-600 rounded-2xl flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8">
                        <defs>
                          <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f09433" />
                            <stop offset="25%" stopColor="#e6683c" />
                            <stop offset="50%" stopColor="#dc2743" />
                            <stop offset="75%" stopColor="#cc2366" />
                            <stop offset="100%" stopColor="#bc1888" />
                          </linearGradient>
                        </defs>
                        {/* Instagram Background */}
                        <rect width="24" height="24" rx="6" fill="url(#instagram-gradient)" />
                        {/* Camera Circle */}
                        <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2.5" />
                        <circle cx="12" cy="12" r="2" fill="none" stroke="white" strokeWidth="1.5" />
                        {/* Camera Dot */}
                        <circle cx="18.5" cy="5.5" r="1.8" fill="white" />
                      </svg>
                    </div>
                    <span className="arabic-text">اشترك عبر Instagram</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="text-center pt-10 space-y-4">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"></div>
            <p className="text-gray-400 text-base arabic-text">مجتمع الإبداع - محتوى حصري ومميز</p>
            <div className="flex items-center justify-center gap-2 text-purple-400">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-bold arabic-text">مختبر الإبداع</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
