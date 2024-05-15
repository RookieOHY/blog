import dynamic from 'next/dynamic'
import { type StaticImageData } from 'next/image'

import cssSvg from '@/images/logo/css.svg'
import dockerSvg from '@/images/logo/docker-4.svg'
import flutterSvg from '@/images/logo/flutter-logo.svg'
import gatsbySvg from '@/images/logo/gatsby.svg'
import goSvg from '@/images/logo/go-logo-1.svg'
import graphqlSvg from '@/images/logo/graphql.svg'
import htmlSvg from '@/images/logo/html.svg'
import ideaSvg from '@/images/logo/intellij-idea-1.svg'
import javaSvg from '@/images/logo/java-5.svg'
import javascriptSvg from '@/images/logo/javascript.svg'
import k8sSvg from '@/images/logo/kubernets.svg'
import nestjsSvg from '@/images/logo/nestjs.svg'
import nextjsSvg from '@/images/logo/nextjs.svg'
import nodejsSvg from '@/images/logo/nodejs.svg'
import prismaSvg from '@/images/logo/prisma.svg'
import reactNativeSvg from '@/images/logo/react-native.svg'
import reactSvg from '@/images/logo/react.svg'
import rustSvg from '@/images/logo/rust.svg'
import swiftSvg from '@/images/logo/swift.svg'
import tailwindCSSSvg from '@/images/logo/tailwind-css.svg'
import typeScriptSvg from '@/images/logo/typescript.svg'
import vscSvg from '@/images/logo/visual-studio-code-1.svg'
import vitejsSvg from '@/images/logo/vitejs.svg'
import vueSvg from '@/images/logo/vue.svg'
import webpackSvg from '@/images/logo/webpack.svg'

import { Block } from '@/components/blocks/block'

const Galton = dynamic(() => import('./galton').then(module => module.Galton), {
  ssr: false,
})

const images: StaticImageData[] = [
  cssSvg,
  dockerSvg,
  flutterSvg,
  gatsbySvg,
  graphqlSvg,
  goSvg,
  htmlSvg,
  ideaSvg,
  javaSvg,
  javascriptSvg,
  k8sSvg,
  nestjsSvg,
  nextjsSvg,
  nodejsSvg,
  prismaSvg,
  reactNativeSvg,
  reactSvg,
  rustSvg,
  swiftSvg,
  tailwindCSSSvg,
  typeScriptSvg,
  vitejsSvg,
  vueSvg,
  vscSvg,
  webpackSvg
]
export const Skills = () => {
  return (
    <Block
      data-type='about'
      className='z-20 row-span-4 bg-surface !p-0 max-sm:col-span-2 sm:row-span-2'
    >
      <div className='absolute right-0 top-0 w-20 -translate-y-1/2 translate-x-1/4 rotate-12 scale-75 rounded-lg p-1 shadow-lg before:absolute before:inset-x-0 before:bottom-0 before:z-20 before:origin-bottom before:scale-y-50 before:rounded-lg before:border-[40px] before:border-transparent before:border-b-red-500 before:border-l-red-500 before:content-["_"] after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:origin-bottom after:scale-y-50 after:rounded-lg after:border-[40px] after:border-transparent after:border-b-red-500 after:border-r-red-500 after:brightness-75 after:content-["_"] dark:before:border-b-blue-950 dark:before:border-l-blue-950 dark:after:border-b-blue-950 dark:after:border-r-blue-950 xl:scale-100'>
        <span className='block h-10 -translate-y-4 rounded bg-amber-50 px-2 py-1 uppercase text-slate-800 shadow dark:bg-gray-200'>
          Skills
        </span>
      </div>
      <Galton images={images} />
    </Block>
  )
}
