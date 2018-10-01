const example_notes = [
	{
		id: 1,
		title: 'Just a test note',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		date: '1535237674'
	},
	{
		id: 2,
		title: 'Second note',
		content:
			'"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
		date: '1535517674'
	},
	{
		id: 3,
		title: "It's a third  note",
		content:
			'Duis eget turpis ac lacus rutrum posuere sit amet in ex. Phasellus at orci ex. Vivamus a urna et lorem molestie semper. Praesent volutpat leo accumsan odio sodales, eget mollis turpis condimentum. Nunc sit amet pharetra ligula, sit amet varius orci. Praesent non posuere est. Nam eu pharetra augue. Aenean leo elit, fringilla et justo in, dictum auctor turpis.',
		date: '1535512345'
	},
	{
		id: 4,
		title: 'Next note',
		content:
			'Nam commodo metus finibus iaculis maximus. Etiam molestie, eros at blandit elementum, libero nibh imperdiet risus, congue scelerisque magna lacus sit amet lectus. Duis bibendum eros sed nisi condimentum suscipit. Nam varius in arcu quis finibus. Nam a nisl sed urna tincidunt lacinia. Aliquam tincidunt euismod condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		date: '1535520000'
	},
	{
		id: 5,
		title: 'Omg again note',
		content:
			'Nullam eu quam magna. Nullam hendrerit risus nec quam vestibulum maximus. Cras rutrum consequat purus vel sollicitudin. Proin vel odio mauris. Nulla auctor, libero ac lobortis mollis, ante est vehicula arcu, sit amet aliquet mi mi eget magna. Ut sit amet mi lobortis, iaculis nisi et, volutpat lectus. In dapibus velit ac risus ullamcorper, et pretium felis laoreet. Sed est mi, accumsan id nulla nec, aliquet varius nunc. In posuere, nibh eu sodales cursus, est neque placerat tellus, quis volutpat orci enim et purus. Etiam dictum dolor diam, auctor tincidunt metus faucibus et. Nunc hendrerit, libero at faucibus maximus, diam ante pharetra est, vitae pharetra urna risus a augue. Nullam sodales quam id dolor laoreet, quis auctor nisl ornare. Quisque eu nunc ante. Cras placerat viverra semper. Vivamus tincidunt dapibus scelerisque. Proin tempor fringilla lacus in mollis.',
		date: '1535421303'
	},
	{
		id: 6,
		title: 'Random title',
		content:
			'Phasellus sem magna, lacinia non est vel, placerat commodo turpis. Mauris porttitor, nisl in volutpat egestas, dolor risus vulputate dui, sed aliquam lectus nibh nec augue. Fusce imperdiet velit dignissim, pharetra augue at, tristique mauris. Pellentesque massa massa, consectetur at libero egestas, sagittis cursus est. Donec quis commodo metus, vel feugiat eros. Etiam eu nulla arcu. Vestibulum semper eget lacus at maximus. Nulla facilisi. Sed sit amet metus lobortis, convallis neque sed, dapibus eros. Cras ex dolor, aliquam quis scelerisque vitae, vehicula lobortis massa.',
		date: '1535137674'
	},
	{
		id: 7,
		title: 'Seventh note',
		content:
			'Suspendisse mattis vel magna eu mollis. Quisque at fermentum sapien. Mauris id lorem dapibus velit volutpat tristique. Donec condimentum purus a ipsum tempor lobortis non nec eros. Nam molestie, tortor ac blandit lacinia, mi urna faucibus ex, ac finibus felis metus ac dui. Morbi vitae lacus id nunc sodales feugiat. Mauris nibh arcu, imperdiet nec consequat eu, ultricies ut ipsum. Aliquam erat volutpat. In quis dui eleifend, rutrum eros eget, aliquam erat. Curabitur varius, magna non blandit tincidunt, augue est tincidunt velit, vitae hendrerit arcu libero ac velit. Fusce tincidunt eros ut neque ultrices, accumsan tempus leo vehicula. In dapibus fermentum enim, sed faucibus enim finibus sit amet',
		date: '1535237674'
	},
	{
		id: 8,
		title: 'Almost last note',
		content:
			'Cras fermentum justo non cursus suscipit. Etiam luctus massa a eros consequat, vitae scelerisque mi imperdiet. Praesent id finibus metus. In quis tellus id eros gravida mollis. In ante tellus, viverra id finibus nec, feugiat at ipsum. Duis varius ullamcorper nulla, quis suscipit erat tincidunt eu. Pellentesque euismod porttitor dapibus. Maecenas eu libero vel odio aliquam efficitur et non urna. Duis augue magna, ullamcorper et tellus vitae, venenatis pulvinar risus. Fusce pulvinar lorem purus, vitae vehicula tortor venenatis nec. Nullam non vehicula lorem. Nam quis erat suscipit odio sollicitudin fringilla ac vel nulla. Nullam fringilla nisl a vehicula tempus. Integer ut fermentum nibh. Maecenas placerat accumsan lectus.',
		date: '1535037674'
	},
	{
		id: 9,
		title: 'Very almost last note',
		content:
			'Mauris nisi neque, ultricies quis cursus nec, placerat ut nisi. Nulla fringilla non mauris et scelerisque. Vestibulum molestie nulla augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nec efficitur nisi. Proin suscipit lacus a nulla iaculis, sit amet pharetra magna accumsan. Nullam ullamcorper vitae tellus ut aliquet. Vivamus finibus diam et mattis hendrerit. Quisque justo nibh, tincidunt nec nibh at, facilisis congue lectus. Nam posuere dapibus felis vitae dapibus. Nunc vulputate tristique hendrerit',
		date: '1535437674'
	},
	{
		id: 10,
		title: 'last note',
		content:
			'Donec eget lectus lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut maximus ipsum at augue cursus, at imperdiet dui posuere. Ut sit amet sem fermentum, hendrerit dui ut, mattis massa. Cras nec dolor vitae purus luctus faucibus quis vel enim. Proin nec facilisis nibh, vitae bibendum libero. Proin blandit nibh sit amet lorem hendrerit, quis mattis tortor mattis. Nunc lectus lectus, volutpat eu tellus a, venenatis tincidunt leo. Vestibulum non dapibus eros. Nam porta lacinia est, sit amet suscipit odio. Phasellus placerat velit et ante interdum fermentum. Aenean nisl lacus, laoreet in tincidunt nec, egestas nec purus.',
		date: '1535511111'
	}
];

export default example_notes;
