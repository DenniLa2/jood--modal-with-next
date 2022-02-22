/**
 * Created by Denis Abramyan (dennila2@ya.ru, dennila2@gmail.com)
 * on 17.01.2022
 */
import { StackRight, useJdModalService } from '@jood/v-modal'
import { onBeforeRouteLeave } from 'vue-router'
import MySomeModal from '../components/MySomeModal.vue'
import { Subscription } from 'rxjs'

export const useAskAboutLeaveRoute = () => {
  const modalService = useJdModalService()
  const listener = new Subscription()

  onBeforeRouteLeave((to, from, next) => {
    _askAboutLeavePage(next)
  })

  const _askAboutLeavePage = (next: (doIt?: boolean) => void) => {

    const modalRef = modalService.open({
      component: MySomeModal,
      overlayClose: true,
    })

    const observeResult = modalRef.observeClosed()
      // @ts-ignore
      .subscribe((result: boolean) => {
        console.log(result)
        next(result)
        listener.remove(observeResult)
      })

    listener.add(observeResult)
  }
}
