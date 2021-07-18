<script lang="ts">
import { h, defineComponent } from "vue";
import { useRouter } from "vue-router";

export const ListElementWrapper = defineComponent({
    setup(props, context) {
        return () => {
            return h(
                "li",
                {
                    class: "mt-8",
                },
                [
                    h(
                        "h5",
                        {
                            class: "px-3 mb-3 lg:mb-3 tracking-wider font-semibold text-blueGray-600 uppercase",
                        },
                        [context.slots.heading()]
                    ),
                    h("ul", {}, [context.slots.default()]),
                ]
            );
        };
    },
});

export const ListElement = defineComponent({
    props: {
        text: {
            type: String,
            required: true,
        },
        background: {
            type: String,
            required: true,
        },
        wrapper: {
            type: String,
            required: true,
        },
    },
    setup(props, context) {
        return () => {
            return h(
                "li",
                {
                    id: "ListElement",
                    class: [""],
                },
                [
                    h(
                        "button",
                        {
                            class: [props.wrapper],
                            href: "/#",
                        },
                        [
                            h(
                                "span",
                                {
                                    class: [props.background],
                                },
                                ""
                            ),
                            h(
                                "span",
                                {
                                    class: [props.text],
                                },
                                context.slots
                            ),
                        ]
                    ),
                ]
            );
        };
    },
});

export default defineComponent({
    name: "PackedListItems",
    props: ["items"],
    setup(props, { slots }) {
        const router = useRouter();
        const goToThatComponent = (name: String) => {
            router.push(`/hi/${name}`);
        };
        const getListOfElements = () => {
            const children: any = [];
            if (props.items) {
                props.items.list.map((item: Object, index: Int16Array) => {
                    children.push(
                        h(
                            "li",
                            {
                                id: "ListElement",
                                key: index,
                                class: [""],
                            },
                            [
                                h(
                                    "button",
                                    {
                                        class: [
                                            item.status === "✔"
                                                ? "cursor-pointer"
                                                : "cursor-default",
                                            "px-3 py-2 group duration-200 relative flex items-center",
                                        ],
                                        onClick: () => {
                                            goToThatComponent(
                                                item.value.toLowerCase()
                                            );
                                        },
                                    },
                                    [
                                        h(
                                            "span",
                                            {
                                                class: [
                                                    "rounded-md absolute inset-0 bg-cyan-50 opacity-0",
                                                ],
                                            },
                                            ""
                                        ),
                                        h(
                                            "span",
                                            {
                                                class: [
                                                    item.status === "✔"
                                                        ? "group-hover:text-blueGray-900 text-blueGray-500"
                                                        : "text-blueGray-300 cursor-default select-none",
                                                    "transition-colors relative",
                                                ],
                                            },
                                            item.value
                                        ),
                                    ]
                                ),
                            ]
                        )
                    );
                });
            }
            return children;
        };

        return () => {
            return h("ul", null, {
                default() {
                    return [
                        h(
                            ListElementWrapper,
                            // { items: this.$props.items },
                            null,
                            {
                                heading() {
                                    return props.items.heading;
                                },
                                default() {
                                    return getListOfElements();
                                },
                            }
                        ),
                    ];
                },
            });
        };
    },
});
</script>
