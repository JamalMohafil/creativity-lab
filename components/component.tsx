"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Clock, Lightbulb, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { useState } from "react"

export default function Component() {
  const [isInstagramDialogOpen, setIsInstagramDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Effects with Animation */}
      <div className="absolute inset-0">
        {/* Animated floating orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        {/* Additional floating elements */}
        <div className="absolute top-32 right-32 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-yellow-500/8 rounded-full blur-2xl animate-bounce delay-700"></div>
        {/* Animated stars */}
        <div className="absolute top-16 left-1/4 text-purple-400/30 animate-pulse">
          <Star className="w-4 h-4" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-blue-400/30 animate-pulse delay-300">
          <Star className="w-3 h-3" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-pink-400/30 animate-pulse delay-700">
          <Star className="w-5 h-5" />
        </div>
        {/* Moving gradient lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-sm mx-auto space-y-6">
          {/* Profile Section - Enhanced */}
          <div className="text-center space-y-4">
            {/* Enhanced Logo with Animation */}
            <div className="relative mx-auto w-24 h-24 group">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
                <Lightbulb className="w-10 h-10 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-white arabic-text">مختبر الإبداع</h1>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto arabic-text">
                مختبر التعليم المتخصص في تطوير المهارات الإبداعية والتقنية مع أساتذة محترفين
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-400 text-sm">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="arabic-text">سعر موحد على جميع المنصات</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Links - Fixed Height */}
          <div className="flex flex-col gap-3">
            {/* Instagram - Now Active with Dialog */}
            <Dialog open={isInstagramDialogOpen} onOpenChange={setIsInstagramDialogOpen}>
              <DialogTrigger asChild>
                <Card className="hover:scale-[1.02] enhanced-button bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-pink-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 cursor-pointer">
                  <CardContent className="p-0">
                    <Button className="w-full h-10 bg-transparent cursor-pointer hover:bg-transparent text-white border-0 text-xl font-semibold flex items-center justify-center gap-4 px-6">
                      <span className="text-right" dir="rtl">
                        اشترك عبر Instagram
                      </span>
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/instagram-logo.webp"
                          alt="Instagram Logo"
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-md mx-auto bg-gray-900/95 backdrop-blur-sm border border-gray-700 text-white">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl font-bold arabic-text text-white flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-2xl flex items-center justify-center p-1">
                      <Image
                        src="/images/instagram-logo.webp"
                        alt="Instagram Logo"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    كيفية الاشتراك عبر Instagram
                  </DialogTitle>
                </DialogHeader>

                <ScrollArea className="max-h-[80vh] pr-4">
                  <div className="space-y-6">
                    {/* Important Notes Section */}
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <h3 className="text-red-400 font-bold text-lg mb-3 arabic-text flex items-center gap-2">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">
                          !
                        </span>
                        ملاحظات مهمة
                      </h3>
                      <div className="space-y-2 text-sm arabic-text text-gray-300">
                        <div className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>
                            يجب حصراً أن تكون على الهاتف ويكون Instagram بأحدث إصدار مثبت لديك ليعمل الرابط بشكل صحيح
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>يجب أن تكون في بلد مفعل فيه خدمة الاشتراكات في Instagram</span>
                        </div>
                      </div>
                    </div>

                    {/* Steps Section */}
                    <div className="space-y-4">
                      <h3 className="text-white font-bold text-lg arabic-text text-center">خطوات الاشتراك</h3>

                      {/* Step 1 */}
                      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-end gap-3 mb-3">
                          <h4 className="text-white font-semibold arabic-text">
                            الدخول إلى <a href="https://www.instagram.com/omz_studio/" className="text-blue-400">صفحتنا</a> والضغط على الاشتراك
                          </h4>
                          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                            1
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm arabic-text mb-3">
                          ادخل إلى <a href="https://www.instagram.com/omz_studio/" className="text-blue-400">رابط صفحتنا</a> ثم اضغط على زر "الاشتراك" كما هو موضح في الصورة:
                        </p> 
                        {/* Placeholder for first screenshot */}
                        <div className="bg-gray-700/50 rounded-lg p-4 border-2 border-dashed border-gray-600">
                          <div className="text-center text-gray-400 arabic-text">
                        

    <Image src={"/images/instagram-first-step.jpeg"} alt="Step 1" className="rounded-md" width={500} height={500} />
                            <p className="text-xs mt-2">(الدخول للصفحة والضغط على الاشتراك)</p>
                             <Button
                        className="mt-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold arabic-text"
                      >
                        <a href="https://www.instagram.com/omz_studio/">
                          
                       رابط الصفحة
                        </a>
                      </Button>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-end gap-3 mb-3">
                          <h4 className="text-white font-semibold arabic-text">الاشتراك</h4>
                          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                            2
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm arabic-text mb-3">
                          اضغط على "الاشتراك مع تجربة مجانية 14 يوم" كما هو موضح:
                        </p>
                        {/* Placeholder for second screenshot */}
                        <div className="bg-gray-700/50 rounded-lg p-4 border-2 border-dashed border-gray-600">
                          <div className="text-center text-gray-400 arabic-text">
                          
    <Image src={"/images/instagram-second-step.jpeg"} className="rounded-md" alt="Step 2.898a9" width={500} height={500} />
                            <p className="text-xs mt-2">(اختار الاشتراك مع تجربة مجانية 14 يوم)</p>
                          </div>
                        </div>
                      </div>

                      {/* Success Message */}
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white text-xl">✓</span>
                          </div>
                          <h4 className="text-green-400 font-bold text-lg arabic-text mb-2">تهانينا!</h4>
                          <p className="text-gray-300 text-sm arabic-text">
                            هكذا تكون قد اشتركت معنا بنجاح وستحصل على جميع المحتويات التعليمية الحصرية
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                    <div className="pt-4">
                      <Button
                        onClick={() => setIsInstagramDialogOpen(false)}
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold arabic-text"
                      >
                        فهمت، شكراً
                      </Button>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            {/* Telegram - Fixed
            <a href="https://t.me/+EGwjQxLGphc4NzNk" target="_blank" rel="noreferrer">
              <Card className="hover:scale-[1.02] enhanced-button bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <CardContent className="p-0">
                  <Button className="w-full h-10 bg-transparent cursor-pointer hover:bg-transparent text-white border-0 text-xl font-semibold flex items-center justify-center gap-4 px-6">
                    <span className="text-right" dir="rtl">
                      اشترك عبر Telegram
                    </span>
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Image
                        src="/images/telegram.webp"
                        alt="Telegram Logo"
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                  </Button>
                </CardContent>
              </Card>
            </a> */}

             <div className="py-4">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 hover:border-gray-600/50 transition-all duration-300">
                <div className="text-center space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-white text-lg font-bold arabic-text">قناة واتساب مجانية</h3>
                    <p className="text-gray-400 text-sm arabic-text">احصل على محتوى تعليمي حصري ومجاني</p>
                  </div>
                  {/* Features */}
                  <div className="flex justify-center gap-6 py-3">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Star className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-xs text-gray-400 arabic-text">محتوى يومي</span>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-xs text-gray-400 arabic-text">نصائح حصرية</span>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-1">
                        <MessageCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-xs text-gray-400 arabic-text">تفاعل مباشر</span>
                    </div>
                  </div>
                   {/* <a
                    href="https://whatsapp.com/channel/0029VbAwaVWKQuJQGjOXAe1U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-xl p-4 transition-all duration-300 hover:shadow-lg border border-gray-600/50 hover:border-gray-500/50">
                      <div className="flex items-center justify-between">
                        <div className="text-right flex-1" dir="rtl">
                          <div className="text-white font-semibold text-sm arabic-text mb-1">انضم الآن مجاناً</div>
                          <div className="text-gray-300 text-xs arabic-text">اضغط للانضمام إلى القناة</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-green-400 text-xs font-bold bg-green-500/20 px-2 py-1 rounded-full">
                            مجاني
                          </div>
                          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a> */}
                </div>
              </div>
            </div>

             <div className="flex items-center justify-center py-4">
              <Badge className="bg-gray-800/90 text-gray-200 px-4 py-2 text-sm font-semibold flex items-center gap-2 border border-gray-600 rounded-full animate-pulse">
                <Clock className="w-4 h-4" />
                <span className="arabic-text">قادم قريباً</span>
              </Badge>
            </div>

             <Card className="bg-white/5 backdrop-blur-sm border border-white/10 opacity-90 border-dashed">
              <CardContent className="p-0">
                <Button
                  disabled
                  className="w-full h-10 bg-transparent text-gray-400 border-0 text-xl font-semibold flex items-center justify-center gap-4 px-6 cursor-not-allowed"
                >
                  <span className="text-right" dir="rtl">
                    اشترك عبر WhatsApp
                  </span>
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>

           <div className="pt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6 animate-pulse"></div>
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
              <CardContent className="p-5">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-gray-300 mb-3">
                    <MessageCircle className="w-5 h-5 animate-pulse" />
                    <span className="text-lg font-semibold arabic-text">هل تحتاج مساعدة؟</span>
                  </div>
                  <p className="text-gray-400 text-sm arabic-text leading-relaxed">
                    في حال واجهت مشاكل في التسجيل الرجاء التواصل معنا على واتساب
                  </p>
                  {/* WhatsApp Contact Buttons */}
                  <div className="space-y-3 pt-2">
                    {/* First WhatsApp Number */}
                    <a href="https://wa.me/905514987428" target="_blank" rel="noopener noreferrer" className="block">
                      <Card className="hover:scale-[1.02] bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-green-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                        <CardContent className="p-0">
                          <Button className="w-full cursor-pointer h-5 bg-transparent hover:bg-transparent text-white border-0 text-lg font-semibold flex items-center justify-center gap-4 px-6">
                            <span className="text-right text-sm arabic-text" dir="rtl">
                              واتساب - الدعم الأول
                            </span>
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                              </svg>
                            </div>
                          </Button>
                        </CardContent>
                      </Card>
                    </a>

                    {/* Second WhatsApp Number */}
                    <a href="https://wa.me/905055781300" target="_blank" rel="noopener noreferrer" className="block">
                      <Card className="hover:scale-[1.02] bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-green-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                        <CardContent className="p-0">
                          <Button className="w-full cursor-pointer h-5 bg-transparent hover:bg-transparent text-white border-0 text-lg font-semibold flex items-center justify-center gap-4 px-6">
                            <span className="text-right text-sm arabic-text" dir="rtl">
                              واتساب - الدعم الثاني
                            </span>
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                              </svg>
                            </div>
                          </Button>
                        </CardContent>
                      </Card>
                    </a>
                  </div>
                  <div className="pt-3">
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                      <Sparkles className="w-3 h-3 animate-pulse" />
                      <span className="text-xs arabic-text">متاحون للمساعدة على مدار الساعة</span>
                      <Sparkles className="w-3 h-3 animate-pulse" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Footer */}
          <div className="text-center pt-8 space-y-3">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6 animate-pulse"></div>
            <p className="text-gray-400 text-sm arabic-text">اشترك للحصول على أحدث المحتويات التعليمية</p>
            <div className="flex items-center justify-center gap-2 text-purple-400">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="text-xs font-medium arabic-text">مختبر الإبداع © {new Date().getFullYear()}</span>
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
