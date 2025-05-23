// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_NOTES_METADATA: Metadata = {
    id: "05aa91a825b65166c425b7ec0eb4409fe3f5ad64.boutiques",
    name: "3dNotes",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dNotesParameters {
    "__STYXTYPE__": "3dNotes";
    "add_note"?: string | null | undefined;
    "append_history"?: string | null | undefined;
    "replace_history"?: string | null | undefined;
    "delete_note"?: number | null | undefined;
    "print_notes": boolean;
    "help": boolean;
    "dataset": InputPathType;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "3dNotes": v_3d_notes_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_notes(...)`.
 *
 * @interface
 */
interface V3dNotesOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3d_notes_params(
    dataset: InputPathType,
    add_note: string | null = null,
    append_history: string | null = null,
    replace_history: string | null = null,
    delete_note: number | null = null,
    print_notes: boolean = false,
    help: boolean = false,
): V3dNotesParameters {
    /**
     * Build parameters.
    
     * @param dataset AFNI compatible dataset [required].
     * @param add_note Add the string 'str' to the list of notes.
     * @param append_history Append the string 'str' to the dataset's history. This can only appear once on the command line.
     * @param replace_history Replace any existing history note with 'str'. This option cannot be used with '-h'.
     * @param delete_note Deletes note number num.
     * @param print_notes Print to stdout the expanded notes.
     * @param help Displays this help screen.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dNotes" as const,
        "print_notes": print_notes,
        "help": help,
        "dataset": dataset,
    };
    if (add_note !== null) {
        params["add_note"] = add_note;
    }
    if (append_history !== null) {
        params["append_history"] = append_history;
    }
    if (replace_history !== null) {
        params["replace_history"] = replace_history;
    }
    if (delete_note !== null) {
        params["delete_note"] = delete_note;
    }
    return params;
}


function v_3d_notes_cargs(
    params: V3dNotesParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dNotes");
    if ((params["add_note"] ?? null) !== null) {
        cargs.push(
            "-a",
            (params["add_note"] ?? null)
        );
    }
    if ((params["append_history"] ?? null) !== null) {
        cargs.push(
            "-h",
            (params["append_history"] ?? null)
        );
    }
    if ((params["replace_history"] ?? null) !== null) {
        cargs.push(
            "-HH",
            (params["replace_history"] ?? null)
        );
    }
    if ((params["delete_note"] ?? null) !== null) {
        cargs.push(
            "-d",
            String((params["delete_note"] ?? null))
        );
    }
    if ((params["print_notes"] ?? null)) {
        cargs.push("-ses");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    return cargs;
}


function v_3d_notes_outputs(
    params: V3dNotesParameters,
    execution: Execution,
): V3dNotesOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dNotesOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3d_notes_execute(
    params: V3dNotesParameters,
    execution: Execution,
): V3dNotesOutputs {
    /**
     * A program to add, delete and show notes for AFNI datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dNotesOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_notes_cargs(params, execution)
    const ret = v_3d_notes_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_notes(
    dataset: InputPathType,
    add_note: string | null = null,
    append_history: string | null = null,
    replace_history: string | null = null,
    delete_note: number | null = null,
    print_notes: boolean = false,
    help: boolean = false,
    runner: Runner | null = null,
): V3dNotesOutputs {
    /**
     * A program to add, delete and show notes for AFNI datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset AFNI compatible dataset [required].
     * @param add_note Add the string 'str' to the list of notes.
     * @param append_history Append the string 'str' to the dataset's history. This can only appear once on the command line.
     * @param replace_history Replace any existing history note with 'str'. This option cannot be used with '-h'.
     * @param delete_note Deletes note number num.
     * @param print_notes Print to stdout the expanded notes.
     * @param help Displays this help screen.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dNotesOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_NOTES_METADATA);
    const params = v_3d_notes_params(dataset, add_note, append_history, replace_history, delete_note, print_notes, help)
    return v_3d_notes_execute(params, execution);
}


export {
      V3dNotesOutputs,
      V3dNotesParameters,
      V_3D_NOTES_METADATA,
      v_3d_notes,
      v_3d_notes_params,
};
