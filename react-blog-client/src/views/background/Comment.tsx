import React, { useEffect, useState } from "react";
import "./blogManage.scss";
import { message, Modal, Table, Tooltip } from "antd";
import { carefulParseDate } from "../../components/util";
import { deleteCommentById, queryAllComment } from "../../api/comment";

const columns = [
    {
        title: "评论人",
        dataIndex: "user",
        key: "user"
    },
    {
        title: "内容",
        dataIndex: "content",
        key: "content",
        ellipsis: {
            showTitle: false
        },
        render: (content: any) => (
            <Tooltip placement="topLeft" title={content}>
                {content}
            </Tooltip>
        )
    },
    {
        title: "博客标题",
        dataIndex: "blog",
        key: "blog",
        ellipsis: {
            showTitle: false
        },
        render: (content: any) => (
            <Tooltip placement="topLeft" title={content}>
                {content}
            </Tooltip>
        )
    },
    {
        title: "发布时间",
        dataIndex: "publish_date",
        key: "publish_date",
        render: (text: any) => <span>{carefulParseDate(text)}</span>
    }
];

const Comment: React.FC<any> = (props) => {
    const [show, setShow] = useState(false);
    const [delId, setDelId] = useState("");
    const [comment, setComment] = useState([]);
    useEffect(() => {
        queryAllComment().then((res: any) => {
            if (res.status === 200) {
                setComment(res.data);
            }
        });
    }, [show]);
    const data = comment.map((item: any) => {
        if (item.user === null) {
            item.user = {
                name: "已经删除的用户"
            };
        }
        if (item.blogId === null) {
            item.blogId = {
                title: "已经删除的博文"
            };
        }
        return {
            key: item._id,
            content: item.content,
            publish_date: item.publish_date,
            user: item.user.name,
            blog: item.blogId.title
        };
    });
    return (
        <div>
            <Modal
                title="删除留言！"
                visible={show}
                cancelText="取消"
                okText="确定删除"
                okType="danger"
                onOk={() => {
                    deleteCommentById(delId).then((res: any) => {
                        message.success("删除成功", .3);
                        setShow(false);
                    });
                }}
                onCancel={() => {
                    setShow(false);
                }}
            >
                <p>删除操作不可逆转，是否确定删除？</p>
            </Modal>
            <Table tableLayout={"fixed"} onRow={record => {
                return {
                    onClick: event => {
                        setDelId(record.key);
                        setShow(true);
                    } // 点击行
                };
            }}
                dataSource={data} columns={columns} bordered />
        </div>
    );
};


export default Comment;
