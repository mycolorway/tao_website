module Docs
  module Departments
    module TreeItemsHelper

      def departments_tree_data
        [{
          id: 1,
          name: '行政部',
          children: [{
            id: '1-1',
            name: '行政子部门1'
          }, {
            id: '1-2',
            name: '行政子部门2'
          }, {
            id: '1-3',
            name: '行政子部门3'
          }, {
            id: '1-4',
            remote: false,
            name: '行政子部门4'
          }]
        }, {
          id: 2,
          name: '人事部',
          children: [{
            id: '2-1',
            name: '人事子部门1'
          }, {
            id: '2-2',
            name: '人事子部门2'
          }, {
            id: '2-3',
            name: '人事子部门3'
          }]
        }, {
          id: 3,
          name: '产品部'
        }, {
          id: 5,
          name: '市场部'
        }, {
          id: 4,
          name: '销售部',
          children: [{
            id: '3-1',
            name: '销售子部门1'
          }, {
            id: '3-2',
            name: '销售子部门2'
          }, {
            id: '3-3',
            name: '销售子部门3'
          }]
        }]
      end

    end
  end
end
