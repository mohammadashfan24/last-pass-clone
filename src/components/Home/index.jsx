import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import { sideBarOptions } from "../../constants/lastPass";
import LastPassSelect from "../LastPassSelect";
import LastPassAccordion from "../LastPassAccordion";
import LastPassSidebar from "../LastPassSidebar";
import LastPassButton from "../LastPassButton";
import LastPassCategoryItem from "../LastPassCategoryItem";
import LastPassHeader from "../../components/LastPassHeader";
import { getList } from "../../utils/home";
import { options } from "../../constants/SelectOptions";
import { mockData } from "../../constants/mockData";
import LastPassAddNote from "../LastPassAddNote";
import LastPassAddPassword from "../LastPassAddPassword";
import LastPassAddAddress from "../LastPassAddAddress";
import { addCategory, editCategory, deleteCategory } from "../../utils/home";
import { PASSWORD, NOTE, ADDRESS } from "../../constants/category";
import "./home.css";

const propTypes = {
  logout: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const getCategoryForm = ({
  user,
  category,
  closeModal,
  getCategoryList,
  formData
}) => {
  if (category === PASSWORD) {
    return (
      <LastPassAddPassword
        onCancel={closeModal}
        onSave={({
          site,
          name,
          userName,
          password,
          folder,
          additionalInfo,
          _id
        }) => {
          const payload = {
            type: PASSWORD,
            data: {
              userId: user.id,
              site,
              name,
              userName,
              password,
              folder,
              additionalInfo,
              _id
            }
          };
          if (!_id) {
            addCategory(payload).then(data => {
              closeModal();
              getCategoryList(PASSWORD);
            });
          } else {
            editCategory(payload).then(data => {
              closeModal();
              getCategoryList(PASSWORD);
            });
          }
        }}
        formData={formData}
      />
    );
  }

  if (category === NOTE) {
    return (
      <LastPassAddNote
        onCancel={closeModal}
        onSave={({ name, folder, note, _id }) => {
          const payload = {
            type: NOTE,
            data: {
              userId: user.id,
              name,
              folder,
              note,
              _id
            }
          };
          if (!_id) {
            addCategory(payload).then(data => {
              closeModal();
              getCategoryList(NOTE);
            });
          } else {
            editCategory(payload).then(data => {
              closeModal();
              getCategoryList(NOTE);
            });
          }
        }}
        formData={formData}
      />
    );
  }

  if (category === ADDRESS) {
    return (
      <LastPassAddAddress
        onCancel={closeModal}
        onSave={({ name, folder, address, city, country, _id }) => {
          const payload = {
            type: ADDRESS,
            data: {
              userId: user.id,
              name,
              folder,
              address,
              city,
              country,
              _id
            }
          };
          if (!_id) {
            addCategory(payload).then(data => {
              closeModal();
              getCategoryList(ADDRESS);
            });
          } else {
            editCategory(payload).then(data => {
              closeModal();
              getCategoryList(ADDRESS);
            });
          }
        }}
        formData={formData}
      />
    );
  }
};

const getCategoryTitle = category => {
  if (category === PASSWORD) {
    return "Password";
  }

  if (category === NOTE) {
    return "Note";
  }

  if (category === ADDRESS) {
    return "Address";
  }
};

const LastPassHome = ({ logout, openModal, user }) => {
  const [sortOrder, setSortOrder] = useState(options[4]);
  const [category, setCategory] = useState("");
  const [list, setList] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getCategoryList = useCallback(
    type => {
      const paylaod = {
        type,
        userId: user.id
      };

      getList(paylaod).then(
        data => {
          setList(data);
        },
        () => {
          setList(mockData);
        }
      );
    },
    [user]
  );

  return (
    <div className="last-pass-home">
      <LastPassSidebar
        options={sideBarOptions}
        onClick={option => {
          getCategoryList(option.id);
          setCategory(option.id);
        }}
      />

      <div className="last-pass-home__container">
        <LastPassHeader
          logout={logout}
          onSearch={value => {
            setSearchKey(value);
          }}
        />
        <div className="last-pass-home__container--content">
          <div className="last-pass-home__container--content__sort-block">
            <div className="last-pass-home__container--content__sort-block__title">
              <span className="passwords"> {getCategoryTitle(category)}</span>
            </div>
            <LastPassSelect
              className="last-pass-select-sort"
              value={sortOrder.value}
              options={options}
              onChange={value => {
                setSortOrder(value);
              }}
            />
          </div>

          {list.length > 0 &&
            list
              .filter(item => {
                if (searchKey) {
                  return item.folderName.includes(searchKey);
                }

                return true;
              })
              .sort((a, b) => {
                switch (sortOrder.value) {
                  case "a_z_folder":
                    return a.folderName.localeCompare(b.folderName);
                  case "z_a_folder":
                    return b.folderName.localeCompare(a.folderName);
                  default:
                    return a.folderName.localeCompare(b.folderName);
                }
              })
              .map(folder => (
                <LastPassAccordion
                  className="last-pass-home__uncategorized"
                  label={folder.folderName}
                >
                  <div className="last-pass-home__row">
                    {folder.items
                      .sort((a, b) => {
                        switch (sortOrder.value) {
                          case "a_z_name":
                            return a.name.localeCompare(b.name);
                          case "z_a_name":
                            return b.name.localeCompare(a.name);
                          case "most_recent":
                            return a.name.localeCompare(b.name);
                          default:
                            return a.name.localeCompare(b.name);
                        }
                      })
                      .map(item => (
                        <LastPassCategoryItem
                          item={item}
                          onDelete={id => {
                            const paylaod = {
                              type: category,
                              userId: user.id,
                              id
                            };
                            deleteCategory(paylaod).then(dat => {
                              getCategoryList(category);
                            });
                          }}
                          onEdit={data => {
                            openModal({
                              title: `Edit ${getCategoryTitle(category)}`,
                              render: ({ closeModal }) => {
                                return getCategoryForm({
                                  user,
                                  category,
                                  closeModal,
                                  getCategoryList,
                                  formData: data
                                });
                              }
                            });
                          }}
                        />
                      ))}
                  </div>
                </LastPassAccordion>
              ))}
        </div>
        <div className="last-pass-home__add-button">
          <LastPassButton
            className="last-pass-button--round"
            label="+"
            onClick={() => {
              openModal({
                title: `Add ${getCategoryTitle(category)}`,
                render: ({ closeModal }) => {
                  return getCategoryForm({
                    user,
                    category,
                    closeModal,
                    getCategoryList
                  });
                }
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

LastPassHome.propTypes = propTypes;
export default LastPassHome;
