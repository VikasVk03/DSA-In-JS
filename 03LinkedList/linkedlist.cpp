#include <iostream>

class Node
{
public:
    int data;
    Node *next;

    // constructor
    Node(int new_data)
    {
        this->data = new_data;
        this->next = nullptr;
    }
};

int main()
{
    Node *head = new Node(10);

    head->next = new Node(20);

    head->next->next = new Node(30);

    Node *temp = head;

    while (temp != nullptr)
    {
        std::cout << temp->data << " -> ";

        temp = temp->next;
    }

    std::cout << std::endl;

    std::cout << "Enter data for linkedlist " << " \n";

    Node *new_data_link;

    int n;
    int i = 0;

    std::cin >> n;
    new_data_link = new Node(n);
    Node *temp_data = new_data_link;

    while (i < 4)
    {

        std::cin >> n;
        std::cout << n << std::endl;
        temp_data->next = new Node(n);
        temp_data = temp_data->next;
        i++;
    }

    Node *print2 = new_data_link;
    do
    {
        std::cout << print2->data << " -> ";

        print2 = print2->next;
    } while (print2 != nullptr);

    return 0;
}
