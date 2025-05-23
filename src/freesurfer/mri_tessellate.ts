// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_TESSELLATE_METADATA: Metadata = {
    id: "f45ebf91c0ba77da8568b9b11d9468a5d80fa341.boutiques",
    name: "mri_tessellate",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriTessellateParameters {
    "__STYXTYPE__": "mri_tessellate";
    "input_volume": InputPathType;
    "label_value": number;
    "output_surf": string;
    "different_labels": boolean;
    "max_vertices"?: number | null | undefined;
    "real_ras": boolean;
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
        "mri_tessellate": mri_tessellate_cargs,
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
        "mri_tessellate": mri_tessellate_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_tessellate(...)`.
 *
 * @interface
 */
interface MriTessellateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file of the tessellation surface, typically ?h.orig.
     */
    output_surface_file: OutputPathType;
}


function mri_tessellate_params(
    input_volume: InputPathType,
    label_value: number,
    output_surf: string,
    different_labels: boolean = false,
    max_vertices: number | null = null,
    real_ras: boolean = false,
): MriTessellateParameters {
    /**
     * Build parameters.
    
     * @param input_volume Input volume (e.g., a filled MRI image).
     * @param label_value Label value for the tessellation. Integer value, if input is filled volume, 127 is rh, 255 is lh.
     * @param output_surf Binary surface of the tessellation, output file.
     * @param different_labels Tessellate the surface of all voxels with different labels.
     * @param max_vertices Set the max number of vertices to nvertices, and the max number of faces to (2 * nvertices).
     * @param real_ras Save surface with real RAS coordinates where c_(r,a,s) != 0.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_tessellate" as const,
        "input_volume": input_volume,
        "label_value": label_value,
        "output_surf": output_surf,
        "different_labels": different_labels,
        "real_ras": real_ras,
    };
    if (max_vertices !== null) {
        params["max_vertices"] = max_vertices;
    }
    return params;
}


function mri_tessellate_cargs(
    params: MriTessellateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_tessellate");
    cargs.push(execution.inputFile((params["input_volume"] ?? null)));
    cargs.push(String((params["label_value"] ?? null)));
    cargs.push((params["output_surf"] ?? null));
    if ((params["different_labels"] ?? null)) {
        cargs.push("-a");
    }
    if ((params["max_vertices"] ?? null) !== null) {
        cargs.push(
            "-maxv",
            String((params["max_vertices"] ?? null))
        );
    }
    if ((params["real_ras"] ?? null)) {
        cargs.push("-n");
    }
    return cargs;
}


function mri_tessellate_outputs(
    params: MriTessellateParameters,
    execution: Execution,
): MriTessellateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriTessellateOutputs = {
        root: execution.outputFile("."),
        output_surface_file: execution.outputFile([(params["output_surf"] ?? null)].join('')),
    };
    return ret;
}


function mri_tessellate_execute(
    params: MriTessellateParameters,
    execution: Execution,
): MriTessellateOutputs {
    /**
     * This program creates a surface by tessellating a given input volume.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriTessellateOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_tessellate_cargs(params, execution)
    const ret = mri_tessellate_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_tessellate(
    input_volume: InputPathType,
    label_value: number,
    output_surf: string,
    different_labels: boolean = false,
    max_vertices: number | null = null,
    real_ras: boolean = false,
    runner: Runner | null = null,
): MriTessellateOutputs {
    /**
     * This program creates a surface by tessellating a given input volume.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_volume Input volume (e.g., a filled MRI image).
     * @param label_value Label value for the tessellation. Integer value, if input is filled volume, 127 is rh, 255 is lh.
     * @param output_surf Binary surface of the tessellation, output file.
     * @param different_labels Tessellate the surface of all voxels with different labels.
     * @param max_vertices Set the max number of vertices to nvertices, and the max number of faces to (2 * nvertices).
     * @param real_ras Save surface with real RAS coordinates where c_(r,a,s) != 0.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriTessellateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_TESSELLATE_METADATA);
    const params = mri_tessellate_params(input_volume, label_value, output_surf, different_labels, max_vertices, real_ras)
    return mri_tessellate_execute(params, execution);
}


export {
      MRI_TESSELLATE_METADATA,
      MriTessellateOutputs,
      MriTessellateParameters,
      mri_tessellate,
      mri_tessellate_params,
};
