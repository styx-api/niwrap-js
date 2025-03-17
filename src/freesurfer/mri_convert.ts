// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_CONVERT_METADATA: Metadata = {
    id: "2815806c64bc2ae2d1911e8294a65422695fdb8a.boutiques",
    name: "mri_convert",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriConvertParameters {
    "__STYXTYPE__": "mri_convert";
    "inp_volume": InputPathType;
    "out_volume": string;
    "read_only": boolean;
    "no_write": boolean;
    "in_info": boolean;
    "out_info": boolean;
    "in_stats": boolean;
    "out_stats": boolean;
    "upsample"?: number | null | undefined;
    "force_ras_good": boolean;
    "apply_transform"?: InputPathType | null | undefined;
    "apply_inverse_transform"?: InputPathType | null | undefined;
    "in_type"?: string | null | undefined;
    "out_type"?: string | null | undefined;
    "in_orientation"?: string | null | undefined;
    "out_orientation"?: string | null | undefined;
    "scale_factor"?: number | null | undefined;
    "bfile_little_endian": boolean;
    "sphinx": boolean;
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
        "mri_convert": mri_convert_cargs,
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
        "mri_convert": mri_convert_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_convert(...)`.
 *
 * @interface
 */
interface MriConvertOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Converted volume output file
     */
    converted_volume: OutputPathType;
}


function mri_convert_params(
    inp_volume: InputPathType,
    out_volume: string,
    read_only: boolean = false,
    no_write: boolean = false,
    in_info: boolean = false,
    out_info: boolean = false,
    in_stats: boolean = false,
    out_stats: boolean = false,
    upsample: number | null = null,
    force_ras_good: boolean = false,
    apply_transform: InputPathType | null = null,
    apply_inverse_transform: InputPathType | null = null,
    in_type: string | null = null,
    out_type: string | null = null,
    in_orientation: string | null = null,
    out_orientation: string | null = null,
    scale_factor: number | null = null,
    bfile_little_endian: boolean = false,
    sphinx: boolean = false,
): MriConvertParameters {
    /**
     * Build parameters.
    
     * @param inp_volume The input volume file
     * @param out_volume The output volume file
     * @param read_only Open in read-only mode
     * @param no_write Do not write output
     * @param in_info Print input volume information
     * @param out_info Print output volume information
     * @param in_stats Print statistics on input volume
     * @param out_stats Print statistics on output volume
     * @param upsample Reduce voxel size by a factor in all dimensions
     * @param force_ras_good Use default when orientation info absent
     * @param apply_transform Apply transform given by xfm or m3z file
     * @param apply_inverse_transform Apply inverse of transform given by xfm or m3z file
     * @param in_type Specify input file type
     * @param out_type Specify output file type
     * @param in_orientation Specify input orientation
     * @param out_orientation Specify output orientation
     * @param scale_factor Input intensity scale factor
     * @param bfile_little_endian Write out bshort/bfloat files in little endian
     * @param sphinx Reorient to sphinx position
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_convert" as const,
        "inp_volume": inp_volume,
        "out_volume": out_volume,
        "read_only": read_only,
        "no_write": no_write,
        "in_info": in_info,
        "out_info": out_info,
        "in_stats": in_stats,
        "out_stats": out_stats,
        "force_ras_good": force_ras_good,
        "bfile_little_endian": bfile_little_endian,
        "sphinx": sphinx,
    };
    if (upsample !== null) {
        params["upsample"] = upsample;
    }
    if (apply_transform !== null) {
        params["apply_transform"] = apply_transform;
    }
    if (apply_inverse_transform !== null) {
        params["apply_inverse_transform"] = apply_inverse_transform;
    }
    if (in_type !== null) {
        params["in_type"] = in_type;
    }
    if (out_type !== null) {
        params["out_type"] = out_type;
    }
    if (in_orientation !== null) {
        params["in_orientation"] = in_orientation;
    }
    if (out_orientation !== null) {
        params["out_orientation"] = out_orientation;
    }
    if (scale_factor !== null) {
        params["scale_factor"] = scale_factor;
    }
    return params;
}


function mri_convert_cargs(
    params: MriConvertParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_convert");
    cargs.push(execution.inputFile((params["inp_volume"] ?? null)));
    cargs.push((params["out_volume"] ?? null));
    if ((params["read_only"] ?? null)) {
        cargs.push("-ro");
    }
    if ((params["no_write"] ?? null)) {
        cargs.push("-nw");
    }
    if ((params["in_info"] ?? null)) {
        cargs.push("-ii");
    }
    if ((params["out_info"] ?? null)) {
        cargs.push("-oi");
    }
    if ((params["in_stats"] ?? null)) {
        cargs.push("-is");
    }
    if ((params["out_stats"] ?? null)) {
        cargs.push("-os");
    }
    if ((params["upsample"] ?? null) !== null) {
        cargs.push(
            "--upsample",
            String((params["upsample"] ?? null))
        );
    }
    if ((params["force_ras_good"] ?? null)) {
        cargs.push("--force_ras_good");
    }
    if ((params["apply_transform"] ?? null) !== null) {
        cargs.push(
            "--apply_transform",
            execution.inputFile((params["apply_transform"] ?? null))
        );
    }
    if ((params["apply_inverse_transform"] ?? null) !== null) {
        cargs.push(
            "--apply_inverse_transform",
            execution.inputFile((params["apply_inverse_transform"] ?? null))
        );
    }
    if ((params["in_type"] ?? null) !== null) {
        cargs.push(
            "--in_type",
            (params["in_type"] ?? null)
        );
    }
    if ((params["out_type"] ?? null) !== null) {
        cargs.push(
            "--out_type",
            (params["out_type"] ?? null)
        );
    }
    if ((params["in_orientation"] ?? null) !== null) {
        cargs.push(
            "--in_orientation",
            (params["in_orientation"] ?? null)
        );
    }
    if ((params["out_orientation"] ?? null) !== null) {
        cargs.push(
            "--out_orientation",
            (params["out_orientation"] ?? null)
        );
    }
    if ((params["scale_factor"] ?? null) !== null) {
        cargs.push(
            "--scale",
            String((params["scale_factor"] ?? null))
        );
    }
    if ((params["bfile_little_endian"] ?? null)) {
        cargs.push("--bfile-little-endian");
    }
    if ((params["sphinx"] ?? null)) {
        cargs.push("--sphinx");
    }
    return cargs;
}


function mri_convert_outputs(
    params: MriConvertParameters,
    execution: Execution,
): MriConvertOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriConvertOutputs = {
        root: execution.outputFile("."),
        converted_volume: execution.outputFile([(params["out_volume"] ?? null)].join('')),
    };
    return ret;
}


function mri_convert_execute(
    params: MriConvertParameters,
    execution: Execution,
): MriConvertOutputs {
    /**
     * A general purpose utility for converting between different file formats supported by FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriConvertOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_convert_cargs(params, execution)
    const ret = mri_convert_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_convert(
    inp_volume: InputPathType,
    out_volume: string,
    read_only: boolean = false,
    no_write: boolean = false,
    in_info: boolean = false,
    out_info: boolean = false,
    in_stats: boolean = false,
    out_stats: boolean = false,
    upsample: number | null = null,
    force_ras_good: boolean = false,
    apply_transform: InputPathType | null = null,
    apply_inverse_transform: InputPathType | null = null,
    in_type: string | null = null,
    out_type: string | null = null,
    in_orientation: string | null = null,
    out_orientation: string | null = null,
    scale_factor: number | null = null,
    bfile_little_endian: boolean = false,
    sphinx: boolean = false,
    runner: Runner | null = null,
): MriConvertOutputs {
    /**
     * A general purpose utility for converting between different file formats supported by FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param inp_volume The input volume file
     * @param out_volume The output volume file
     * @param read_only Open in read-only mode
     * @param no_write Do not write output
     * @param in_info Print input volume information
     * @param out_info Print output volume information
     * @param in_stats Print statistics on input volume
     * @param out_stats Print statistics on output volume
     * @param upsample Reduce voxel size by a factor in all dimensions
     * @param force_ras_good Use default when orientation info absent
     * @param apply_transform Apply transform given by xfm or m3z file
     * @param apply_inverse_transform Apply inverse of transform given by xfm or m3z file
     * @param in_type Specify input file type
     * @param out_type Specify output file type
     * @param in_orientation Specify input orientation
     * @param out_orientation Specify output orientation
     * @param scale_factor Input intensity scale factor
     * @param bfile_little_endian Write out bshort/bfloat files in little endian
     * @param sphinx Reorient to sphinx position
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriConvertOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_CONVERT_METADATA);
    const params = mri_convert_params(inp_volume, out_volume, read_only, no_write, in_info, out_info, in_stats, out_stats, upsample, force_ras_good, apply_transform, apply_inverse_transform, in_type, out_type, in_orientation, out_orientation, scale_factor, bfile_little_endian, sphinx)
    return mri_convert_execute(params, execution);
}


export {
      MRI_CONVERT_METADATA,
      MriConvertOutputs,
      MriConvertParameters,
      mri_convert,
      mri_convert_params,
};
