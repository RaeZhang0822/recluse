import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.20bc6b6b.js';

/* src/routes/about.svelte generated by Svelte v3.38.1 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let h10;
	let t1;
	let t2;
	let ul0;
	let li0;
	let t3;
	let t4;
	let li1;
	let t5;
	let t6;
	let li2;
	let t7;
	let t8;
	let h11;
	let t9;
	let t10;
	let ul1;
	let li3;
	let t11;
	let t12;
	let li4;
	let t13;

	const block = {
		c: function create() {
			t0 = space();
			h10 = element("h1");
			t1 = text("About this site");
			t2 = space();
			ul0 = element("ul");
			li0 = element("li");
			t3 = text("为了尝试新技术所以用的Svelte.js搭建");
			t4 = space();
			li1 = element("li");
			t5 = text("记录技术博客，生活故事，和一些无用的小玩意儿");
			t6 = space();
			li2 = element("li");
			t7 = text("正在逐步完善中，但是我很懒，不用太期待");
			t8 = space();
			h11 = element("h1");
			t9 = text("About me");
			t10 = space();
			ul1 = element("ul");
			li3 = element("li");
			t11 = text("进击的前端工程师");
			t12 = space();
			li4 = element("li");
			t13 = text("喜欢音乐、读书、（某些）运动和搞钱");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h10 = claim_element(nodes, "H1", {});
			var h10_nodes = children(h10);
			t1 = claim_text(h10_nodes, "About this site");
			h10_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			ul0 = claim_element(nodes, "UL", {});
			var ul0_nodes = children(ul0);
			li0 = claim_element(ul0_nodes, "LI", {});
			var li0_nodes = children(li0);
			t3 = claim_text(li0_nodes, "为了尝试新技术所以用的Svelte.js搭建");
			li0_nodes.forEach(detach_dev);
			t4 = claim_space(ul0_nodes);
			li1 = claim_element(ul0_nodes, "LI", {});
			var li1_nodes = children(li1);
			t5 = claim_text(li1_nodes, "记录技术博客，生活故事，和一些无用的小玩意儿");
			li1_nodes.forEach(detach_dev);
			t6 = claim_space(ul0_nodes);
			li2 = claim_element(ul0_nodes, "LI", {});
			var li2_nodes = children(li2);
			t7 = claim_text(li2_nodes, "正在逐步完善中，但是我很懒，不用太期待");
			li2_nodes.forEach(detach_dev);
			ul0_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			h11 = claim_element(nodes, "H1", {});
			var h11_nodes = children(h11);
			t9 = claim_text(h11_nodes, "About me");
			h11_nodes.forEach(detach_dev);
			t10 = claim_space(nodes);
			ul1 = claim_element(nodes, "UL", {});
			var ul1_nodes = children(ul1);
			li3 = claim_element(ul1_nodes, "LI", {});
			var li3_nodes = children(li3);
			t11 = claim_text(li3_nodes, "进击的前端工程师");
			li3_nodes.forEach(detach_dev);
			t12 = claim_space(ul1_nodes);
			li4 = claim_element(ul1_nodes, "LI", {});
			var li4_nodes = children(li4);
			t13 = claim_text(li4_nodes, "喜欢音乐、读书、（某些）运动和搞钱");
			li4_nodes.forEach(detach_dev);
			ul1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			add_location(h10, file, 4, 0, 52);
			add_location(li0, file, 7, 1, 84);
			add_location(li1, file, 8, 1, 117);
			add_location(li2, file, 9, 1, 150);
			add_location(ul0, file, 6, 0, 78);
			add_location(h11, file, 12, 0, 186);
			add_location(li3, file, 14, 1, 210);
			add_location(li4, file, 15, 1, 229);
			add_location(ul1, file, 13, 0, 204);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h10, anchor);
			append_dev(h10, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, ul0, anchor);
			append_dev(ul0, li0);
			append_dev(li0, t3);
			append_dev(ul0, t4);
			append_dev(ul0, li1);
			append_dev(li1, t5);
			append_dev(ul0, t6);
			append_dev(ul0, li2);
			append_dev(li2, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, h11, anchor);
			append_dev(h11, t9);
			insert_dev(target, t10, anchor);
			insert_dev(target, ul1, anchor);
			append_dev(ul1, li3);
			append_dev(li3, t11);
			append_dev(ul1, t12);
			append_dev(ul1, li4);
			append_dev(li4, t13);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h10);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(ul0);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(h11);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(ul1);
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
	validate_slots("About", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuMjU4MTM2NjcuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
