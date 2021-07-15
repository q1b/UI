<script lang="ts">
import { h, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export let SideBar = defineComponent({
	setup(props, { slots }) {
		return () => {
			return h(
				'div',
				{
					id: 'sidebar',
					class: [
						'fixed z-40 inset-0 flex-none overflow-hidden bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden ',
					],
				},
				[slots.default()]
			)
		}
	},
})

export let SideBarWrapper = defineComponent({
	setup(props, { slots }) {
		return () => {
			return h(
				'div',
				{
					id: 'side_bar_wrapper',
					class: [
						' h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0 ',
					],
				},
				[slots.default()]
			)
		}
	},
})
export let NavComponent = defineComponent({
	setup(props, { slots }) {
		return () => {
			return h(
				'nav',
				{
					id: 'nav',
					class: [
						'px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)',
					],
				},
				[slots.default()]
			)
		}
	},
})
export let ListElementWrapper = defineComponent({
	setup(props, { slots }) {
		return () => {
			return h(
				'li',
				{
					class: 'mt-8',
				},
				[
					h(
						'h5',
						{
							class:
								'px-3 mb-3 lg:mb-3 tracking-wider font-semibold text-blueGray-600 uppercase',
						},
						[slots.heading()]
					),
					h('ul', {}, [slots.default()]),
				]
			)
		}
	},
})

export let ListElement = defineComponent({
	props: ['text', 'background', 'wrapper'],
	setup(props, { slots }) {
		return () => {
			return h(
				'li',
				{
					id: 'ListElement',
					class: [''],
				},
				[
					h(
						'button',
						{
							class: [props.wrapper],
							href: '/#',
						},
						[
							h(
								'span',
								{
									class: [props.background],
								},
								''
							),
							h(
								'span',
								{
									class: [props.text],
								},
								slots
							),
						]
					),
				]
			)
		}
	},
})

export default defineComponent({
	name: 'PackedListItems',
	props: ['items'],
	setup(props, { slots }) {
		const router = useRouter()
		const goToThatComponent = (name) => {
			router.push(`/hi/${name}`)
		}
		const getListOfElements = () => {
			const children: VNode[] = []
			if (props.items) {
				props.items.list.map((item, index) => {
					children.push(
						h(
							'li',
							{
								id: 'ListElement',
								key: index,
								class: [''],
							},
							[
								h(
									'button',
									{
										class: [
											item.status === '✔' ? 'cursor-pointer' : 'cursor-default',
											'px-3 py-2 group duration-200 relative flex items-center',
										],
										onClick: () => {
											goToThatComponent(item.value.toLowerCase())
										},
									},
									[
										h(
											'span',
											{
												class: [
													'rounded-md absolute inset-0 bg-cyan-50 opacity-0',
												],
											},
											''
										),
										h(
											'span',
											{
												class: [
													item.status === '✔'
														? 'group-hover:text-blueGray-900 text-blueGray-500'
														: 'text-blueGray-300 cursor-default select-none',
													'transition-colors relative',
												],
											},
											item.value
										),
									]
								),
							]
						)
					)
				})
			}
			return children
		}

		return () => {
			return h('ul', null, {
				default() {
					return [
						h(
							ListElementWrapper,
							// { items: this.$props.items },
							null,
							{
								heading() {
									return props.items.heading
								},
								default() {
									return getListOfElements()
								},
							}
						),
					]
				},
			})
		}
	},
})
// key: index,
// id: index,
// wrapper: [
// 	item.status === '✔' ? 'cursor-pointer' : 'cursor-default',
// 	'px-3 py-2 group duration-200 relative flex items-center',
// ],
// text: [
// 	item.status === '✔'
// 		? 'group-hover:text-blueGray-900 text-blueGray-500'
// 		: 'text-blueGray-300 cursor-default select-none',
// 	'transition-colors relative',
// ],
// background: [
// 	'rounded-md absolute inset-0 bg-cyan-50 opacity-0',
// ],

// h(
// 	ListElement,
// 	{
// 	},
// 	{
// 		default() {
// 			return [item.value]
// 		},
// 	}
// )
</script>
