import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.6612e6d6.js';

/* src/routes/gadget/index.svelte generated by Svelte v3.38.1 */

const file = "src/routes/gadget/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let ul;
	let li0;
	let a0;
	let t3;
	let t4;
	let li1;
	let a1;
	let t5;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("这里是我做的一些（自认为）有趣的小玩意儿");
			t2 = space();
			ul = element("ul");
			li0 = element("li");
			a0 = element("a");
			t3 = text("marked");
			t4 = space();
			li1 = element("li");
			a1 = element("a");
			t5 = text("Tuner");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1rkvitd\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "这里是我做的一些（自认为）有趣的小玩意儿");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			a0 = claim_element(li0_nodes, "A", { rel: true, href: true });
			var a0_nodes = children(a0);
			t3 = claim_text(a0_nodes, "marked");
			a0_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t4 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			a1 = claim_element(li1_nodes, "A", { rel: true, href: true });
			var a1_nodes = children(a1);
			t5 = claim_text(a1_nodes, "Tuner");
			a1_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Gadget";
			add_location(h1, file, 11, 0, 134);
			attr_dev(a0, "rel", "prefetch");
			attr_dev(a0, "href", "gadget/marked");
			add_location(a0, file, 14, 6, 176);
			add_location(li0, file, 14, 2, 172);
			attr_dev(a1, "rel", "prefetch");
			attr_dev(a1, "href", "gadget/tuner");
			add_location(a1, file, 15, 6, 237);
			add_location(li1, file, 15, 2, 233);
			attr_dev(ul, "class", "svelte-1uzksw3");
			add_location(ul, file, 13, 0, 165);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, a0);
			append_dev(a0, t3);
			append_dev(ul, t4);
			append_dev(ul, li1);
			append_dev(li1, a1);
			append_dev(a1, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(ul);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Gadget", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Gadget> was created with unknown prop '${key}'`);
	});

	return [];
}

class Gadget extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Gadget",
			options,
			id: create_fragment.name
		});
	}
}

export default Gadget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZWFjOWI0NTcuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
