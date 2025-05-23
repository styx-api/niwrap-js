// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_LABEL_ADJACENCY_METADATA: Metadata = {
    id: "5441d34fe7da5e1d9fb8b7ac840958f08da38c7b.boutiques",
    name: "cifti-label-adjacency",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiLabelAdjacencyParameters {
    "__STYXTYPE__": "cifti-label-adjacency";
    "label_in": InputPathType;
    "adjacency_out": string;
    "opt_left_surface_surface"?: InputPathType | null | undefined;
    "opt_right_surface_surface"?: InputPathType | null | undefined;
    "opt_cerebellum_surface_surface"?: InputPathType | null | undefined;
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
        "cifti-label-adjacency": cifti_label_adjacency_cargs,
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
        "cifti-label-adjacency": cifti_label_adjacency_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `cifti_label_adjacency(...)`.
 *
 * @interface
 */
interface CiftiLabelAdjacencyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output cifti pconn adjacency matrix
     */
    adjacency_out: OutputPathType;
}


function cifti_label_adjacency_params(
    label_in: InputPathType,
    adjacency_out: string,
    opt_left_surface_surface: InputPathType | null = null,
    opt_right_surface_surface: InputPathType | null = null,
    opt_cerebellum_surface_surface: InputPathType | null = null,
): CiftiLabelAdjacencyParameters {
    /**
     * Build parameters.
    
     * @param label_in the input cifti label file
     * @param adjacency_out the output cifti pconn adjacency matrix
     * @param opt_left_surface_surface specify the left surface to use: the left surface file
     * @param opt_right_surface_surface specify the right surface to use: the right surface file
     * @param opt_cerebellum_surface_surface specify the cerebellum surface to use: the cerebellum surface file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-label-adjacency" as const,
        "label_in": label_in,
        "adjacency_out": adjacency_out,
    };
    if (opt_left_surface_surface !== null) {
        params["opt_left_surface_surface"] = opt_left_surface_surface;
    }
    if (opt_right_surface_surface !== null) {
        params["opt_right_surface_surface"] = opt_right_surface_surface;
    }
    if (opt_cerebellum_surface_surface !== null) {
        params["opt_cerebellum_surface_surface"] = opt_cerebellum_surface_surface;
    }
    return params;
}


function cifti_label_adjacency_cargs(
    params: CiftiLabelAdjacencyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-cifti-label-adjacency");
    cargs.push(execution.inputFile((params["label_in"] ?? null)));
    cargs.push((params["adjacency_out"] ?? null));
    if ((params["opt_left_surface_surface"] ?? null) !== null) {
        cargs.push(
            "-left-surface",
            execution.inputFile((params["opt_left_surface_surface"] ?? null))
        );
    }
    if ((params["opt_right_surface_surface"] ?? null) !== null) {
        cargs.push(
            "-right-surface",
            execution.inputFile((params["opt_right_surface_surface"] ?? null))
        );
    }
    if ((params["opt_cerebellum_surface_surface"] ?? null) !== null) {
        cargs.push(
            "-cerebellum-surface",
            execution.inputFile((params["opt_cerebellum_surface_surface"] ?? null))
        );
    }
    return cargs;
}


function cifti_label_adjacency_outputs(
    params: CiftiLabelAdjacencyParameters,
    execution: Execution,
): CiftiLabelAdjacencyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiLabelAdjacencyOutputs = {
        root: execution.outputFile("."),
        adjacency_out: execution.outputFile([(params["adjacency_out"] ?? null)].join('')),
    };
    return ret;
}


function cifti_label_adjacency_execute(
    params: CiftiLabelAdjacencyParameters,
    execution: Execution,
): CiftiLabelAdjacencyOutputs {
    /**
     * Make adjacency matrix of a cifti label file.
     * 
     * Find face-adjacent voxels and connected vertices that have different label values, and count them for each pair.  Put the resulting counts into a parcellated connectivity file, with the diagonal being zero.  This gives a rough estimate of how long or expansive the border between two labels is.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiLabelAdjacencyOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_label_adjacency_cargs(params, execution)
    const ret = cifti_label_adjacency_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_label_adjacency(
    label_in: InputPathType,
    adjacency_out: string,
    opt_left_surface_surface: InputPathType | null = null,
    opt_right_surface_surface: InputPathType | null = null,
    opt_cerebellum_surface_surface: InputPathType | null = null,
    runner: Runner | null = null,
): CiftiLabelAdjacencyOutputs {
    /**
     * Make adjacency matrix of a cifti label file.
     * 
     * Find face-adjacent voxels and connected vertices that have different label values, and count them for each pair.  Put the resulting counts into a parcellated connectivity file, with the diagonal being zero.  This gives a rough estimate of how long or expansive the border between two labels is.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param label_in the input cifti label file
     * @param adjacency_out the output cifti pconn adjacency matrix
     * @param opt_left_surface_surface specify the left surface to use: the left surface file
     * @param opt_right_surface_surface specify the right surface to use: the right surface file
     * @param opt_cerebellum_surface_surface specify the cerebellum surface to use: the cerebellum surface file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiLabelAdjacencyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_LABEL_ADJACENCY_METADATA);
    const params = cifti_label_adjacency_params(label_in, adjacency_out, opt_left_surface_surface, opt_right_surface_surface, opt_cerebellum_surface_surface)
    return cifti_label_adjacency_execute(params, execution);
}


export {
      CIFTI_LABEL_ADJACENCY_METADATA,
      CiftiLabelAdjacencyOutputs,
      CiftiLabelAdjacencyParameters,
      cifti_label_adjacency,
      cifti_label_adjacency_params,
};
