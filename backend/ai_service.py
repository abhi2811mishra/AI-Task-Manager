def suggest_priority(description):

    description = description.lower()

    if "urgent" in description:
        return "high"
    if "meeting" in description:
        return "medium"

    return "low"