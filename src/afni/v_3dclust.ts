// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DCLUST_METADATA: Metadata = {
    id: "3ce8cefee5cef3ba7b1a972b0fcad6cd5a2fd94f.boutiques",
    name: "3dclust",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dclustParameters {
    "__STYXTYPE__": "3dclust";
    "rmm"?: number | null | undefined;
    "vmul"?: number | null | undefined;
    "datasets": Array<InputPathType>;
    "nn1": boolean;
    "nn2": boolean;
    "nn3": boolean;
    "noabs": boolean;
    "summarize": boolean;
    "nosum": boolean;
    "verb": boolean;
    "oned_format": boolean;
    "no_oned_format": boolean;
    "quiet": boolean;
    "mni": boolean;
    "isovalue": boolean;
    "isomerge": boolean;
    "inmask": boolean;
    "prefix"?: string | null | undefined;
    "savemask"?: string | null | undefined;
    "binary": boolean;
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
        "3dclust": v_3dclust_cargs,
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
        "3dclust": v_3dclust_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3dclust(...)`.
 *
 * @interface
 */
interface V3dclustOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * New dataset with clusters set to zero based on prefix.
     */
    prefixed_output: OutputPathType | null;
    /**
     * Ordered mask dataset based on savemask prefix.
     */
    ordered_mask_output: OutputPathType | null;
}


function v_3dclust_params(
    datasets: Array<InputPathType>,
    rmm: number | null = null,
    vmul: number | null = null,
    nn1: boolean = false,
    nn2: boolean = false,
    nn3: boolean = false,
    noabs: boolean = false,
    summarize: boolean = false,
    nosum: boolean = false,
    verb: boolean = false,
    oned_format: boolean = false,
    no_oned_format: boolean = false,
    quiet: boolean = false,
    mni: boolean = false,
    isovalue: boolean = false,
    isomerge: boolean = false,
    inmask: boolean = false,
    prefix: string | null = null,
    savemask: string | null = null,
    binary: boolean = false,
): V3dclustParameters {
    /**
     * Build parameters.
    
     * @param datasets Input dataset(s). More than one allowed, but only the first sub-brick of the dataset.
     * @param rmm Cluster connection radius in millimeters.
     * @param vmul Minimum cluster volume in micro-liters or minimum number of voxels if negative.
     * @param nn1 1st nearest-neighbor clustering (faces touching).
     * @param nn2 2nd nearest-neighbor clustering (edges touching).
     * @param nn3 3rd nearest-neighbor clustering (corners touching).
     * @param noabs Use the signed voxel intensities for calculations.
     * @param summarize Write out only the total nonzero voxel count and volume for each dataset.
     * @param nosum Suppress printout of the totals.
     * @param verb Print out a progress report to stderr as computations proceed.
     * @param oned_format Write output in 1D format (default).
     * @param no_oned_format Do not write output in 1D format.
     * @param quiet Suppress all non-essential output.
     * @param mni Transform output xyz-coordinates from TLRC to MNI space if the input dataset has the +tlrc view.
     * @param isovalue Clusters will be formed only from contiguous voxels that also have the same value.
     * @param isomerge Clusters will be formed from each distinct value in the dataset; spatial contiguity will not be used.
     * @param inmask Use an internal mask from the dataset to eliminate voxels before clustering.
     * @param prefix Write a new dataset that is a copy of the input, but with all voxels not in a cluster set to zero; provide a prefix for the new dataset.
     * @param savemask Write a new dataset that is an ordered mask where the largest cluster is labeled '1', the next largest '2', and so forth.
     * @param binary Turn the output of '-savemask' into a binary (0 or 1) mask.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dclust" as const,
        "datasets": datasets,
        "nn1": nn1,
        "nn2": nn2,
        "nn3": nn3,
        "noabs": noabs,
        "summarize": summarize,
        "nosum": nosum,
        "verb": verb,
        "oned_format": oned_format,
        "no_oned_format": no_oned_format,
        "quiet": quiet,
        "mni": mni,
        "isovalue": isovalue,
        "isomerge": isomerge,
        "inmask": inmask,
        "binary": binary,
    };
    if (rmm !== null) {
        params["rmm"] = rmm;
    }
    if (vmul !== null) {
        params["vmul"] = vmul;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (savemask !== null) {
        params["savemask"] = savemask;
    }
    return params;
}


function v_3dclust_cargs(
    params: V3dclustParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dclust");
    if ((params["rmm"] ?? null) !== null) {
        cargs.push(String((params["rmm"] ?? null)));
    }
    if ((params["vmul"] ?? null) !== null) {
        cargs.push(String((params["vmul"] ?? null)));
    }
    cargs.push(...(params["datasets"] ?? null).map(f => execution.inputFile(f)));
    if ((params["nn1"] ?? null)) {
        cargs.push("-NN1");
    }
    if ((params["nn2"] ?? null)) {
        cargs.push("-NN2");
    }
    if ((params["nn3"] ?? null)) {
        cargs.push("-NN3");
    }
    if ((params["noabs"] ?? null)) {
        cargs.push("-noabs");
    }
    if ((params["summarize"] ?? null)) {
        cargs.push("-summarize");
    }
    if ((params["nosum"] ?? null)) {
        cargs.push("-nosum");
    }
    if ((params["verb"] ?? null)) {
        cargs.push("-verb");
    }
    if ((params["oned_format"] ?? null)) {
        cargs.push("-1Dformat");
    }
    if ((params["no_oned_format"] ?? null)) {
        cargs.push("-no_1Dformat");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["mni"] ?? null)) {
        cargs.push("-mni");
    }
    if ((params["isovalue"] ?? null)) {
        cargs.push("-isovalue");
    }
    if ((params["isomerge"] ?? null)) {
        cargs.push("-isomerge");
    }
    if ((params["inmask"] ?? null)) {
        cargs.push("-inmask");
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["savemask"] ?? null) !== null) {
        cargs.push(
            "-savemask",
            (params["savemask"] ?? null)
        );
    }
    if ((params["binary"] ?? null)) {
        cargs.push("-binary");
    }
    return cargs;
}


function v_3dclust_outputs(
    params: V3dclustParameters,
    execution: Execution,
): V3dclustOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dclustOutputs = {
        root: execution.outputFile("."),
        prefixed_output: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".nii.gz"].join('')) : null,
        ordered_mask_output: ((params["savemask"] ?? null) !== null) ? execution.outputFile([(params["savemask"] ?? null), ".nii.gz"].join('')) : null,
    };
    return ret;
}


function v_3dclust_execute(
    params: V3dclustParameters,
    execution: Execution,
): V3dclustOutputs {
    /**
     * Performs simple-minded cluster detection in 3D datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dclustOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dclust_cargs(params, execution)
    const ret = v_3dclust_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dclust(
    datasets: Array<InputPathType>,
    rmm: number | null = null,
    vmul: number | null = null,
    nn1: boolean = false,
    nn2: boolean = false,
    nn3: boolean = false,
    noabs: boolean = false,
    summarize: boolean = false,
    nosum: boolean = false,
    verb: boolean = false,
    oned_format: boolean = false,
    no_oned_format: boolean = false,
    quiet: boolean = false,
    mni: boolean = false,
    isovalue: boolean = false,
    isomerge: boolean = false,
    inmask: boolean = false,
    prefix: string | null = null,
    savemask: string | null = null,
    binary: boolean = false,
    runner: Runner | null = null,
): V3dclustOutputs {
    /**
     * Performs simple-minded cluster detection in 3D datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param datasets Input dataset(s). More than one allowed, but only the first sub-brick of the dataset.
     * @param rmm Cluster connection radius in millimeters.
     * @param vmul Minimum cluster volume in micro-liters or minimum number of voxels if negative.
     * @param nn1 1st nearest-neighbor clustering (faces touching).
     * @param nn2 2nd nearest-neighbor clustering (edges touching).
     * @param nn3 3rd nearest-neighbor clustering (corners touching).
     * @param noabs Use the signed voxel intensities for calculations.
     * @param summarize Write out only the total nonzero voxel count and volume for each dataset.
     * @param nosum Suppress printout of the totals.
     * @param verb Print out a progress report to stderr as computations proceed.
     * @param oned_format Write output in 1D format (default).
     * @param no_oned_format Do not write output in 1D format.
     * @param quiet Suppress all non-essential output.
     * @param mni Transform output xyz-coordinates from TLRC to MNI space if the input dataset has the +tlrc view.
     * @param isovalue Clusters will be formed only from contiguous voxels that also have the same value.
     * @param isomerge Clusters will be formed from each distinct value in the dataset; spatial contiguity will not be used.
     * @param inmask Use an internal mask from the dataset to eliminate voxels before clustering.
     * @param prefix Write a new dataset that is a copy of the input, but with all voxels not in a cluster set to zero; provide a prefix for the new dataset.
     * @param savemask Write a new dataset that is an ordered mask where the largest cluster is labeled '1', the next largest '2', and so forth.
     * @param binary Turn the output of '-savemask' into a binary (0 or 1) mask.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dclustOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DCLUST_METADATA);
    const params = v_3dclust_params(datasets, rmm, vmul, nn1, nn2, nn3, noabs, summarize, nosum, verb, oned_format, no_oned_format, quiet, mni, isovalue, isomerge, inmask, prefix, savemask, binary)
    return v_3dclust_execute(params, execution);
}


export {
      V3dclustOutputs,
      V3dclustParameters,
      V_3DCLUST_METADATA,
      v_3dclust,
      v_3dclust_params,
};
